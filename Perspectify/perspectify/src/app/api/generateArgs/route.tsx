import OpenAI from "openai";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {

    const jdata = await request.json();

    const article = jdata.articleTitle;
    if(article === ""){
        return NextResponse.json({},{status:501});
    }
    const type = jdata.type;

    const openai = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY
    });

    const completion = await openai.chat.completions.create({
        messages: [
            {
                role: "system",
                content: JSON.stringify(
                    {
                        "task": "Generate a list of arguments and counter arguments in JSON format. At maximum of 5 points for each.",
                        "output_format": {
                            "ARGS": "[List of arguments]",
                            "COUNTER_ARGS": "[List of counter arguments]"
                        }
                    }
                )
            },
            { role: "user", content: article },
        ],
        model: "gpt-3.5-turbo-1106",
        response_format: { type: "json_object" },
    });

    const claims: Array<String> = new Array<String>();
    const counter_claims: Array<String> = new Array<String>();

    completion.choices.forEach((choice) => {
        const content = JSON.parse(choice.message.content!);
        if(!content.ARGS || !content.COUNTER_ARGS){

            console.error("GENERATION ERROR: ENTERED PROMPT -> ",article);
            console.error(content);
            console.error("---------------------------------------------");
            return NextResponse.json({error:"Generation Error"},{status:502});
        }
        content.ARGS.forEach((argument: string) => {
            claims.push(argument);
        })
        content.COUNTER_ARGS.forEach((argument: string) => {
            counter_claims.push(argument);
        });
    });

    const resp_data: any = {};
    if (type === "CLAIM") {
        resp_data['ARGUMENTS'] = claims;
        resp_data['COUNTER_ARGUMENTS'] = counter_claims;
    } else if (type === "ARG") {
        resp_data['ARGUMENTS'] = claims;
    } else if (type == "COUNTER_ARG") {
        resp_data['COUNTER_ARGUMENTS'] = counter_claims;
    }
    return NextResponse.json(resp_data);
}
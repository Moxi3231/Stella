"use client";
import { useState } from "react";
import { Input, Typography, Divider, List, Radio, Layout, theme, Flex, Spin } from 'antd';

const { Title, Paragraph } = Typography;
const { Header, Content, Footer, Sider } = Layout;
const PerspectifyInfo = () => {
    return (
      <div style={{ padding: '20px', borderRadius: '4px', maxWidth: '800px', margin: 'auto' }}>
        <Title level={2}>Welcome to Perspectify!</Title>
        <Paragraph>
          Perspectify is an innovative tool designed to enhance your understanding and creation of academic arguments. Whether you are a student, researcher, or just someone interested in exploring different perspectives on various topics, Perspectify is here to help.
        </Paragraph>
  
        <Divider />
  
        <Title level={3}>What Can Perspectify Do For You?</Title>
        <Paragraph>
          1. <strong>Generate Claims, Arguments, and Counter-Arguments:</strong><br />
          - <strong>Claim Mode:</strong> Generates both arguments and counter-arguments based on a central idea.<br />
          - <strong>Argument Mode:</strong> Focuses solely on generating arguments supporting a particular stance.<br />
          - <strong>Counter-Argument Mode:</strong> Concentrates on producing counter-arguments that oppose a specific claim.
        </Paragraph>
  
        <Divider />
  
        <Title level={3}>Understanding The Basics</Title>
        <Paragraph>
          - <strong>What Is an Argument?</strong> An argument in academia is your central idea supported by relevant, convincing evidence. It's not just a statement of opinion but a reasoned, logical collection of ideas that leads to a certain conclusion.<br />
          - <strong>The Importance of Claims:</strong> A claim forms the backbone of your argument. It's a statement that you present as true and expect your audience to accept. A robust claim should be clear, focused, debatable, and specific.<br />
          - <strong>The Power of Counter-Arguments:</strong> Counter-arguments are vital in academic writing. They represent viewpoints that oppose your main argument. Addressing and refuting counter-arguments shows depth in your analysis and strengthens your original position.
        </Paragraph>
  
        <Divider />
  
        <Title level={3}>How to Use Perspectify</Title>
        <Paragraph>
          1. <strong>Choose Your Mode:</strong> Select whether you want to generate claims, arguments, or counter-arguments.<br />
          2. <strong>Input Your Topic:</strong> Type in your topic or central idea.<br />
          3. <strong>Brainstorm:</strong> Click on 'BrainStorm' to generate content based on your selection.
        </Paragraph>
  
        <Divider />
  
        <Title level={3}>Why Use Perspectify?</Title>
        <Paragraph>
          - <strong>Diverse Perspectives:</strong> Explore different sides of an argument, enhancing critical thinking and understanding.<br />
          - <strong>Academic Rigor:</strong> Strengthen your academic writing by constructing well-rounded arguments.<br />
          - <strong>Ease of Use:</strong> Simple interface, designed for both beginners and advanced users.
        </Paragraph>
  
        <Divider />
  
        <Title level={3}>Try Perspectify Today!</Title>
        <Paragraph>
          Unlock the potential of well-structured arguments and counter-arguments in your academic work. Perspectify is more than just a tool; it's your partner in the journey of exploring ideas and perspectives.
        </Paragraph>
  
        <Divider />
      </div>
    );
  };

function RenderArgs(props: { args: Array<string>, counter_args: Array<string>, isLoading: boolean }) {
    const args = props.args;
    const cargs = props.counter_args;
    const isLoading = props.isLoading;

    return <>
        <div style={{ padding: '20px' }}>

            {isLoading && <>
                <Flex align="center" justify="center" style={{ width: '100%' }}>
                    <Spin size="large" style={{ fontSize: '24px' }} />
                </Flex>
            </>}
            {args.length > 0 && (<>
                <Divider orientation="left" style={{ color: '#1890FF' }}>Arguments</Divider>
                <List
                    bordered
                    dataSource={args}
                    renderItem={item => (
                        <List.Item>
                            <Typography.Text>{item}</Typography.Text>
                        </List.Item>
                    )}
                />
            </>)}

            {cargs.length > 0 && (<>
                <Divider orientation="left" style={{ color: '#CD5C5C' }}>Counter Arguments</Divider>
                <List
                    bordered
                    dataSource={cargs}
                    renderItem={item => (
                        <List.Item>
                            <Typography.Text>{item}</Typography.Text>
                        </List.Item>
                    )}
                />
            </>)}
        </div>
    </>
}
export default function Perspectify() {
    const [option, setOption] = useState("CLAIM");
    const [article, setArticle] = useState("");

    const [_arguments, setArguments] = useState(new Array<string>());
    const [_counter_arguments, setCounterArguments] = useState(new Array<string>());
    const [isLoading, setIsLoading] = useState(false);

    const { token: { colorBgContainer } } = theme.useToken();

    // ********************************* //
    const headerBgColor = '#f0f2f5';
    const textColor = '#010101';
    const siderBgColor = '#ffffff';
    const contentBgColor = '#ffffff';
    const borderColor = '#e8e8e8';
    const footerBgColor = headerBgColor;
    // ********************************* //

    const generateArgs = async () => {
        setIsLoading(true);

        setArguments(new Array<string>());
        setCounterArguments(new Array<string>());

        const resp = await fetch('/api/generateArgs', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                type: option,
                articleTitle: article
            })
        });

        if (resp.ok) {

            const jdata: any = await resp.json();
            if (jdata.error) {
                console.log(jdata);
                return;
            }

            if (option === "CLAIM" || option === "ARG") {
                const arg_list: Array<string> = jdata.ARGUMENTS;
                setArguments(arg_list);
            }
            if (option === "CLAIM" || option === "COUNTER_ARG") {
                const c_args_list: Array<string> = jdata.COUNTER_ARGUMENTS;
                setCounterArguments(c_args_list);
            }
        }
        setIsLoading(false);
    };

    return (
        <Layout>
            <Header style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: headerBgColor }}>
                <Title style={{ color: textColor }}>Perspectify</Title>
            </Header>
            <Content style={{ padding: '24px', backgroundColor: contentBgColor }}>
                <Layout style={{ padding: '24px 0', backgroundColor: colorBgContainer, borderRadius: '4px', boxShadow: '0 1px 4px rgba(0,0,0,0.1)' }}>
                    <Sider width={200} style={{ background: siderBgColor, padding: '20px', borderRight: `1px solid ${borderColor}` }}>
                        <Radio.Group
                            buttonStyle="solid"
                            optionType="button"
                            onChange={(event) => { setOption(event.target.value); }}
                            value={option}
                            style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}
                        >
                            <Radio.Button value="CLAIM" style={{ textAlign: 'center', color: textColor, borderRadius: '0' }}>Claim</Radio.Button>
                            <Radio.Button value="ARG" style={{ textAlign: 'center', color: textColor, borderRadius: '0' }}>Argument</Radio.Button>
                            <Radio.Button value="COUNTER_ARG" style={{ textAlign: 'center', color: textColor, borderRadius: '0' }}>Counter Argument</Radio.Button>
                        </Radio.Group>
                    </Sider>
                    <Content style={{ padding: '0 24px', minHeight: 280, backgroundColor: contentBgColor, borderLeft: `1px solid ${borderColor}` }}>

                        <Input.Search placeholder="Enter the title: `Social Media Good Influnce or Not`"
                            value={article}
                            onChange={(event) => {
                                setArticle(event.target.value);
                            }}
                            enterButton="BrainStorm"
                            loading={false}
                            onSearch={generateArgs} />
                        <RenderArgs args={_arguments} counter_args={_counter_arguments} isLoading={isLoading}></RenderArgs>
                    </Content>
                        
                </Layout>
                <Layout>
                    <Content>
                        <PerspectifyInfo></PerspectifyInfo>
                    </Content>
                </Layout>
            </Content>
            <Footer style={{ textAlign: 'center', backgroundColor: footerBgColor, color: textColor, padding: '12px' }}>
                Perspectify ©2023
            </Footer>
        </Layout>
    );
}
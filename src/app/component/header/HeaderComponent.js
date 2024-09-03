import {Header} from "antd/lib/layout/layout";
import {Flex, Input, Menu, Select, Space, theme} from "antd";
import {SearchOutlined} from "@ant-design/icons";
import {useEffect, useRef, useState} from "react";

const items = [
    {
        key: 'Design',
        label: 'Design'
    },
    {
        key: 'Development',
        label: 'Development'
    },
    {
        key: 'Blog',
        label: 'Blog'
    },
    {
        key: 'Resources',
        label: 'Resources'
    }
]


export const HeaderComponent = () => {
    const inputRef = useRef(null)

    const {
        token: {colorBgContainer},
    } = theme.useToken();

    const [focus, setFocus] = useState(false);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.ctrlKey && (event.key === "K" || event.key === "k"))
            {
                event.preventDefault();
                setFocus(true);
                inputRef?.current?.focus();
            }
        }
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [focus]);

    return (
        <Header style={{padding: '0', background: colorBgContainer}}>
            <Flex gap={'middle'} vertical={false} align={'center'} justify={'space-between'} style={{height: '100%'}}>
                <Flex vertical={false} align={'center'} className={'borderInlineStart'}>
                    <Input
                        bordered={false}
                        placeholder="Type keywords"
                        prefix={<SearchOutlined/>}
                        style={{marginLeft: 10, width: 300}}
                        ref={inputRef}
                        onBlur={() => setFocus(false)}
                        onFocus={() => setFocus(true)}
                    />
                </Flex>
                <Flex align={'center'} style={{marginRight: 20}} gap={'middle'}>
                    <Menu
                        theme="light"
                        mode="horizontal"
                        defaultSelectedKeys={['Design']}
                        items={items}
                        style={{ flex: 1, minWidth: 0 }}
                    />
                    <Select
                        defaultValue="5.12.4"
                        size={'small'}
                        options={[
                            { value: '5.12.4', label: '5.12.4' },
                            { value: '4.x', label: '4.x' },
                            { value: '3.x', label: '3.x' },
                            { value: '2.x', label: '2.x' },
                        ]}
                    />
                    <Select
                        defaultValue="More"
                        size={'small'}
                        options={[
                            { value: 'Ant design chart', label: 'Ant Design Chart' },
                            { value: 'Ant design pro', label: 'Ant Design Pro' },
                            { value: 'Ant design pro component', label: 'Ant Design Pro Components' },
                            { value: 'Ant design of Angular', label: 'Ant design of Angular' },
                        ]}
                    />
                </Flex>
            </Flex>
        </Header>
    )
}
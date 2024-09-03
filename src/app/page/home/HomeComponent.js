import './home-component.css';
import {Breadcrumb, Button} from "antd";
import {Link} from "react-router-dom";
import {DoubleRightOutlined} from "@ant-design/icons";

export const HomeComponent = () => {
    return (
        <div className={'home-component'}>
            <Breadcrumb
                items={[
                    {
                        title: 'Home',
                    },
                    {
                        title: <a href="">Application Center</a>,
                    },
                    {
                        title: <a href="">Application List</a>,
                    },
                    {
                        title: 'An Application',
                    },
                ]}
            />

            Đây là Home page
            <div>
                <Button type="primary" icon={<DoubleRightOutlined />}>
                    <Link to={'/product'}>
                        Go to Product
                    </Link>
                </Button>
            </div>
        </div>
    )
}
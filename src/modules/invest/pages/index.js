import { ArrowUpOutlined } from "@ant-design/icons";
import { ROUTE } from "commons/constants";
import React, { useEffect, useState } from "react"
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import CostUpgrade from "../components/costupgrade/Index";
import History from "../components/History/Index";
import Packages from "../components/Packages/Index";
import PackagesUpgrade from "../components/PackagesUpgrade/Index";
import "./styles.scss";


const InvestPage = () => {
    const { path, url } = useRouteMatch();
    const [isShowList , setShowList] = useState( !!window.location.hash || false);
    useEffect(()=>{
      
    },[])
    console.log(url);
    return <div className='invest'>
            {
                !isShowList ?
                (<>
                 <div className='invest-top'>
                        <Packages setShowList={setShowList} value ={5000}/>
                        <PackagesUpgrade setShowList={setShowList} value ={5000}/>
                    </div>
                    <div className='invest-bottom'><History/></div>
                </>)
                : <div>  <Link to={`${url}`} onClick={()=>setShowList(false)} className="button-packages border-radius-5"><CostUpgrade/></Link> </div>
            }
            {
                
            }
            </div>
}

export default InvestPage;
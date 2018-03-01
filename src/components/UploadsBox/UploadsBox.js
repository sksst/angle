import React from 'react';
import { Icon } from 'antd';
import './UploadsBox.less';
import {Chart, Axis, Geom, Tooltip} from 'bizcharts';

function UploadsBox({type, num}) {
	let bgColor = '#51c6ea';
	let icon = <Icon type="upload" style={{fontSize: '18px'}}/>
	if (type === 'UPLOADS') {
		bgColor = '#51c6ea';
		icon = <Icon type="upload" style={{fontSize: '18px'}}/>
	} else if(type === 'REVIEWS') {
		bgColor = '#51c6ea';
		icon = <Icon type="message" style={{fontSize: '18px'}}/>
	} else if (type === 'ANNOTATIONS') {
		bgColor = '#9289ca';
		icon = <Icon type="edit" style={{fontSize: '18px'}}/>
	} else if (type === 'QUOTA') {
		bgColor = '#9289ca';
		icon = <Icon type="global" style={{fontSize: '18px'}}/>
	}

    const data = [
        { year: '1', sales: Math.random()*50 },
        { year: '2', sales: Math.random()*50 },
        { year: '3', sales: Math.random()*50 },
        { year: '4', sales: Math.random()*50 },
        { year: '5', sales: Math.random()*50 },
        { year: '6', sales: Math.random()*50 },
        { year: '7', sales: Math.random()*50 }
    ];
    const cols = {
        'sales': {tickInterval: 20},
    };

	return (
		<div className="uploads-box" style={{backgroundColor: bgColor}}>
			<div className="top">
				<h2 className="num">{num}</h2>
				<div>{icon}</div>
			</div>
			<div className="type">{type}</div>
			<div className="charts-wrapper">
                <Chart height={100} data={data} scale={cols} forceFit padding={0}>
                    <Geom type="interval" position="year*sales" />
                </Chart>
			</div>
		</div>
	)
}

export default UploadsBox;
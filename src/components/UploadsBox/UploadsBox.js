import React from 'react';
import { Icon } from 'antd';
import './UploadsBox.less';

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

	return (
		<div className="uploads-box" style={{backgroundColor: bgColor}}>
			<div className="top">
				<h2 className="num">{num}</h2>
				<div>{icon}</div>
			</div>
			<div className="type">{type}</div>
		</div>
	)
}

export default UploadsBox;
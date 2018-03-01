import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'antd';

import UploadsBox from '../../components/UploadsBox/UploadsBox';

class DashboardV1 extends Component {
	componentDidMount() {
		this.props.getUploads();
	}
	render() {
		const {uploads} = this.props;
		return (
			<div className="dashboard-v1">
				<Row gutter={16}>
					{uploads && uploads.map((item, index) => (
						<Col span={6} key={index}>
							<UploadsBox type={item.type} num={item.count}/>
						</Col>
					))}
				</Row>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		uploads: state.uploadsReducer.uploads
	}
};
const mapDispatchToProps = dispatch => {
	return {
		getUploads: () => {
			dispatch({type: 'GET_UPLOADS'})
		}
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardV1);
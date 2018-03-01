import request from '../utils/request';

export async function getUploads() {
	return request('http://localhost:3000/api/dashboard/uploads');
}
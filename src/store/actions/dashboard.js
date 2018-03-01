export const GET_UPLOADS = 'GET_UPLOADS';
export const RECEIVE_UPLOADS = 'RECEIVE_UPLOADS';
// 获取uploads
export function getUploads() {
	return {
		type: GET_UPLOADS
	}
}
export function receiveUploads(uploads) {
	return {
		type: RECEIVE_UPLOADS,
		payload: uploads
	}
}



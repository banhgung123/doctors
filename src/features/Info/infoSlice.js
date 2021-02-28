import { createSlice } from '@reduxjs/toolkit';

const data = [
	{
		id: 400,
		display_name: 'BS. Nguyễn Thị Kim Ngân',
		avatar: 'https://randomuser.me/api/portraits/women/10.jpg',
		language: 'vi',
		clinic_name: 'Phòng Khám Chuyên Khoa ABC',
		clinic_address: '201 Nguyễn Thị Định, Phường Thạnh Mỹ Lợi, Quận 2, Hồ Chí Minh, Vietnam',
		rating: 5,
		distance: 6.799155205456782,
		specialty: [
			{
				specialty_id: 10,
				name: 'Phụ Sản',
			},
			{
				specialty_id: 13,
				name: 'Bác sĩ Gia đình',
			},
		],
	},
	{
		id: 411,
		display_name: 'BS. Trần Kiều Oanh',
		avatar: 'https://randomuser.me/api/portraits/women/14.jpg',
		language: ['vi', 'en'],
		clinic_name: 'Phòng Khám Đa khoa XYZ',
		clinic_address: '246/55A Hòa Hưng, P. 13, Quận 10, TP. HCM, Vietnam',
		rating: 3.7,
		distance: 2.899155205456782,
		specialty: [
			{
				specialty_id: 11,
				name: 'Nhi Khoa',
			},
			{
				specialty_id: 12,
				name: 'Da liễu',
			},
		],
	},
	{
		id: 412,
		display_name: 'BS. Đỗ Minh Ngọc',
		avatar: 'https://randomuser.me/api/portraits/men/13.jpg',
		language: ['en', 'fr'],
		clinic_name: 'Bệnh viện Tai Mũi Họng',
		clinic_address: '43 Đinh Tiên Hoàng, P. Bến Nghé, Quận 1, TP. HCM, Vietnam',
		rating: 4.5,
		distance: 11.799155205456782,
		specialty: [
			{
				specialty_id: 21,
				name: 'Tai Mũi Họng',
			},
			{
				specialty_id: 13,
				name: 'Bác sĩ Gia đình',
			},
		],
	},
	{
		id: 413,
		display_name: 'Jorge Ramos, MD',
		avatar: 'https://randomuser.me/api/portraits/men/14.jpg',
		language: ['en', 'fr', 'cn'],
		clinic_name: 'Minh Family Practice',
		clinic_address: '7 Nguyễn Thị Thập, Quận 7, TP. HCM, Vietnam',
		rating: 4.1,
		distance: 15.799155205456782,
		specialty: [
			{
				specialty_id: 21,
				name: 'Tai Mũi Họng',
			},
		],
	},
	{
		id: 414,
		display_name: 'Mary White, MD',
		avatar: 'https://randomuser.me/api/portraits/women/16.jpg',
		language: ['en', 'vi'],
		clinic_name: 'Phòng khám Đông Y Mediheal',
		clinic_address: '73 Nguyễn Xiển, Phường 25, Quận Bình Thạnh, TP. HCM, Vietnam',
		rating: 3.0,
		distance: 1.899155205456782,
		specialty: [
			{
				specialty_id: 21,
				name: 'Tai Mũi Họng',
			},
		],
	},
	{
		id: 416,
		display_name: 'BS. Tien Thanh',
		language: ['en', 'vi'],
		clinic_name: 'Minh Family Practice',
		clinic_address: '50 Trương Định, P. Bến Thành, Quận 1, TP. HCM, Vietnam',
		rating: 3.0,
		distance: 11.899155205456782,
		specialty: [
			{
				specialty_id: 11,
				name: 'Nhi Khoa',
			},
			{
				specialty_id: 13,
				name: 'Bác sĩ Gia đình',
			},
		],
	},
	{
		id: 417,
		display_name: 'BS. Nguyễn Thanh Tuấn',
		avatar: 'https://randomuser.me/api/portraits/men/34.jpg',
		language: 'vi',
		clinic_name: 'Phòng khám Bác sĩ Gia đình',
		clinic_address: '50 Trương Định, P. Bến Thành, Quận 1, TP. HCM, Vietnam',
		rating: 4.7,
		distance: 12.899155205456782,
		specialty: [
			{
				specialty_id: 11,
				name: 'Nhi Khoa',
			},
		],
	},
	{
		id: 418,
		display_name: 'BS. Lê Thanh Toàn',
		avatar: 'https://randomuser.me/api/portraits/men/34.jpg',
		language: 'vi',
		clinic_name: 'Phòng Khám Trung Tâm Y Tế Hà Đô',
		clinic_address: '50 Trương Định, P. Bến Thành, Quận 1, TP. HCM, Vietnam',
		rating: 4.1,
		distance: 11.899155205456782,
		specialty: [
			{
				specialty_id: 11,
				name: 'Nhi Khoa',
			},
			{
				specialty_id: 12,
				name: 'Da liễu',
			},
		],
	},
	{
		id: 419,
		display_name: 'BS. Dương Minh Trí',
		avatar: 'https://randomuser.me/api/portraits/men/34.jpg',
		language: 'vi',
		clinic_name: 'Phòng khám chuyên khoa Nội Tiết',
		clinic_address: '257 /22 Lý Thường Kiệt, Đường Số 3 Cư Xá Lữ Gia, P.15, Quận 11, TP. HCM, Vietnam',
		rating: 2.9,
		distance: 21.899155205456782,
		specialty: [
			{
				specialty_id: 17,
				name: 'Nội tiết',
			},
		],
	},
	{
		id: 420,
		display_name: 'BS. Trương Thị Ngọc phú',
		avatar: 'https://randomuser.me/api/portraits/men/34.jpg',
		language: 'vi',
		clinic_name: 'Phòng khám tai mũi họng Thành Đông',
		clinic_address: '2 Phan Thúc Duyện, Phường 4, Tân Bình, TP. HCM, Vietnam',
		rating: 3.1,
		distance: 5.399155205456782,
		specialty: [
			{
				specialty_id: 11,
				name: 'Nhi Khoa',
			},
		],
	},
	{
		id: 402,
		display_name: 'BS. Nguyễn Thị Kim Ngân',
		avatar: 'https://randomuser.me/api/portraits/women/10.jpg',
		language: 'vi',
		clinic_name: 'Phòng Khám Chuyên Khoa ABC',
		clinic_address: '201 Nguyễn Thị Định, Phường Thạnh Mỹ Lợi, Quận 2, Hồ Chí Minh, Vietnam',
		rating: 5,
		distance: 6.799155205456782,
		specialty: [
			{
				specialty_id: 10,
				name: 'Phụ Sản',
			},
		],
	},
	{
		id: 421,
		display_name: 'BS. Trần Kiều Oanh',
		avatar: 'https://randomuser.me/api/portraits/women/14.jpg',
		language: ['vi', 'en'],
		clinic_name: 'Phòng Khám Đa khoa XYZ',
		clinic_address: '246/55A Hòa Hưng, P. 13, Quận 10, TP. HCM, Vietnam',
		rating: 3.7,
		distance: 2.899155205456782,
		specialty: [
			{
				specialty_id: 11,
				name: 'Nhi Khoa',
			},
		],
	},
	{
		id: 422,
		display_name: 'BS. Đỗ Minh Ngọc',
		avatar: 'https://randomuser.me/api/portraits/men/13.jpg',
		language: ['en', 'fr'],
		clinic_name: 'Bệnh viện Tai Mũi Họng',
		clinic_address: '43 Đinh Tiên Hoàng, P. Bến Nghé, Quận 1, TP. HCM, Vietnam',
		rating: 4.5,
		distance: 11.799155205456782,
		specialty: [
			{
				specialty_id: 21,
				name: 'Tai Mũi Họng',
			},
		],
	},
	{
		id: 423,
		display_name: 'Jorge Ramos, MD',
		avatar: 'https://randomuser.me/api/portraits/men/14.jpg',
		language: ['en', 'fr', 'cn'],
		clinic_name: 'Minh Family Practice',
		clinic_address:
			'494 đường Mã Lò (cách vòng xoay Lăng Cha Cả 500 mét), phường Bình Hưng Hòa A, Quận Tân Bình, TP. HCM, Vietnam',
		rating: 4.1,
		distance: 15.799155205456782,
		specialty: [
			{
				specialty_id: 21,
				name: 'Tai Mũi Họng',
			},
		],
	},
	{
		id: 424,
		display_name: 'Mary White, MD',
		avatar: 'https://randomuser.me/api/portraits/women/16.jpg',
		language: ['en', 'vi'],
		clinic_name: 'Phòng khám Đông Y Mediheal',
		clinic_address: '73 Nguyễn Xiển, Phường 25, Quận Bình Thạnh, TP. HCM, Vietnam',
		rating: 3.0,
		distance: 1.899155205456782,
		specialty: [
			{
				specialty_id: 21,
				name: 'Tai Mũi Họng',
			},
		],
	},
	{
		id: 426,
		display_name: 'BS. Tien Thanh',
		language: ['en', 'vi'],
		clinic_name: 'Minh Family Practice',
		clinic_address: '50 Trương Định, P. Bến Thành, Quận 1, TP. HCM, Vietnam',
		rating: 3.0,
		distance: 11.899155205456782,
		specialty: [
			{
				specialty_id: 11,
				name: 'Nhi Khoa',
			},
		],
	},
	{
		id: 427,
		display_name: 'BS. Nguyễn Thanh Tuấn',
		avatar: 'https://randomuser.me/api/portraits/men/34.jpg',
		language: 'vi',
		clinic_name: 'Phòng khám Bác sĩ Gia đình',
		clinic_address: '50 Trương Định, P. Bến Thành, Quận 1, TP. HCM, Vietnam',
		rating: 4.7,
		distance: 12.899155205456782,
		specialty: [
			{
				specialty_id: 11,
				name: 'Nhi Khoa',
			},
		],
	},
	{
		id: 428,
		display_name: 'BS. Lê Thanh Toàn',
		avatar: 'https://randomuser.me/api/portraits/men/34.jpg',
		language: 'vi',
		clinic_name: 'Phòng Khám Trung Tâm Y Tế Hà Đô',
		clinic_address: '50 Trương Định, P. Bến Thành, Quận 1, TP. HCM, Vietnam',
		rating: 4.1,
		distance: 11.899155205456782,
		specialty: [
			{
				specialty_id: 11,
				name: 'Nhi Khoa',
			},
		],
	},
	{
		id: 429,
		display_name: 'BS. Dương Minh Trí',
		avatar: 'https://randomuser.me/api/portraits/men/34.jpg',
		language: 'vi',
		clinic_name: 'Phòng khám chuyên khoa Nội Tiết',
		clinic_address: '257 /22 Lý Thường Kiệt, Đường Số 3 Cư Xá Lữ Gia, P.15, Quận 11, TP. HCM, Vietnam',
		rating: 2.9,
		distance: 21.899155205456782,
		specialty: [
			{
				specialty_id: 17,
				name: 'Nội tiết',
			},
		],
	},
	{
		id: 430,
		display_name: 'BS. Trương Thị Ngọc phú',
		avatar: 'https://randomuser.me/api/portraits/men/34.jpg',
		language: 'vi',
		clinic_name: 'Phòng khám tai mũi họng Thành Đông',
		clinic_address: 'Trung tâm y tế xã, 186 Hương Lộ 65B, phường Tân Hiệp, huyện Hóc Môn, Tp. Hồ Chí Minh, Vietnam',
		rating: 3.1,
		distance: 35.399155205456782,
		specialty: [
			{
				specialty_id: 11,
				name: 'Nhi Khoa',
			},
		],
	},
	{
		id: 403,
		display_name: 'BS. Nguyễn Thị Kim Ngân',
		avatar: 'https://randomuser.me/api/portraits/women/10.jpg',
		language: 'vi',
		clinic_name: 'Phòng Khám Chuyên Khoa ABC',
		clinic_address: '201 Nguyễn Thị Định, Phường Thạnh Mỹ Lợi, Quận 2, Thành phố Hồ Chí Minh, Vietnam',
		rating: 5,
		distance: 6.799155205456782,
		specialty: [
			{
				specialty_id: 10,
				name: 'Phụ Sản',
			},
		],
	},
	{
		id: 431,
		display_name: 'BS. Trần Kiều Oanh',
		avatar: 'https://randomuser.me/api/portraits/women/14.jpg',
		language: ['vi', 'en'],
		clinic_name: 'Phòng Khám Đa khoa XYZ',
		clinic_address: '246/55A Hòa Hưng, P. 13, Quận 10, TP. HCM, Vietnam',
		rating: 3.7,
		distance: 2.899155205456782,
		specialty: [
			{
				specialty_id: 11,
				name: 'Nhi Khoa',
			},
		],
	},
	{
		id: 432,
		display_name: 'BS. Đỗ Minh Ngọc',
		avatar: 'https://randomuser.me/api/portraits/men/13.jpg',
		language: ['en', 'fr'],
		clinic_name: 'Bệnh viện Tai Mũi Họng',
		clinic_address: '43 Đinh Tiên Hoàng, P. Bến Nghé, Quận 1, TP. HCM, Vietnam',
		rating: 4.5,
		distance: 11.799155205456782,
		specialty: [
			{
				specialty_id: 21,
				name: 'Tai Mũi Họng',
			},
		],
	},
	{
		id: 433,
		display_name: 'Jorge Ramos, MD',
		avatar: 'https://randomuser.me/api/portraits/men/14.jpg',
		language: ['en', 'fr', 'cn'],
		clinic_name: 'Minh Family Practice',
		clinic_address: '7 Nguyễn Thị Thập, Quận 7, TP. HCM, Vietnam',
		rating: 4.1,
		distance: 15.799155205456782,
		specialty: [
			{
				specialty_id: 21,
				name: 'Tai Mũi Họng',
			},
		],
	},
	{
		id: 434,
		display_name: 'Mary White, MD',
		avatar: 'https://randomuser.me/api/portraits/women/16.jpg',
		language: ['en', 'vi'],
		clinic_name: 'Phòng khám Đông Y Mediheal',
		clinic_address:
			'Tầng 2, chung cư 373/152/41/6 đường Lý Thường Kiệt, Phường Bình Trị Đông, Quận Tân Bình, TP. Hồ Chí Minh, Vietnam',
		rating: 3.0,
		distance: 1.899155205456782,
		specialty: [
			{
				specialty_id: 21,
				name: 'Tai Mũi Họng',
			},
		],
	},
	{
		id: 436,
		display_name: 'BS. Tien Thanh',
		language: ['en', 'vi'],
		clinic_name: 'Minh Family Practice',
		clinic_address: '50 Trương Định, P. Bến Thành, Quận 1, TP. HCM, Vietnam',
		rating: 3.0,
		distance: 11.899155205456782,
		specialty: [
			{
				specialty_id: 11,
				name: 'Nhi Khoa',
			},
		],
	},
	{
		id: 437,
		display_name: 'BS. Nguyễn Thanh Tuấn',
		avatar: 'https://randomuser.me/api/portraits/men/34.jpg',
		language: 'vi',
		clinic_name: 'Phòng khám Bác sĩ Gia đình',
		clinic_address: 'Tầng 2 Viettel Tower, 285 Cách Mạng Tháng 8, P. 12, Quận 10, TP. HCM, Vietnam',
		rating: 4.7,
		distance: 12.899155205456782,
		specialty: [
			{
				specialty_id: 11,
				name: 'Nhi Khoa',
			},
		],
	},
	{
		id: 438,
		display_name: 'BS. Lê Thanh Toàn',
		avatar: 'https://randomuser.me/api/portraits/men/34.jpg',
		language: 'vi',
		clinic_name: 'Phòng Khám Trung Tâm Y Tế Hà Đô',
		clinic_address: 'Tầng 3, 215-217 Lý Tự Trọng, P. Bến Thành, Quận 1, TP. HCM, Vietnam',
		rating: 4.1,
		distance: 11.899155205456782,
		specialty: [
			{
				specialty_id: 11,
				name: 'Nhi Khoa',
			},
		],
	},
	{
		id: 439,
		display_name: 'BS. Dương Minh Trí',
		avatar: 'https://randomuser.me/api/portraits/men/34.jpg',
		language: 'vi',
		clinic_name: 'Phòng khám chuyên khoa Nội Tiết',
		clinic_address: '257 /22 Lý Thường Kiệt, Đường Số 3 Cư Xá Lữ Gia, P.15, Quận 11, TP. HCM, Vietnam',
		rating: 2.9,
		distance: 21.899155205456782,
		specialty: [
			{
				specialty_id: 17,
				name: 'Nội tiết',
			},
		],
	},
	{
		id: 440,
		display_name: 'BS. Trương Thị Ngọc phú',
		avatar: 'https://randomuser.me/api/portraits/men/34.jpg',
		language: 'vi',
		clinic_name: 'Phòng khám tai mũi họng Thành Đông',
		clinic_address: '2 Phan Thúc Duyện, Phường 4, Tân Bình, TP. HCM, Vietnam',
		rating: 3.1,
		distance: 5.399155205456782,
		specialty: [
			{
				specialty_id: 11,
				name: 'Nhi Khoa',
			},
			{
				specialty_id: 17,
				name: 'Nội tiết',
			},
		],
	},
];

const infoSlice = createSlice({
	name: 'info',
	initialState: data,
	reducers: {
		sort(state, action) {
			if (action.payload.value === 'distance') {
				state.sort((a, b) => {
					if (a.distance < b.distance) return -1;
					if (a.distance > b.distance) return 1;
					return 0;
				});
			}

			if (action.payload.value === 'rating') {
				state.sort((a, b) => {
					if (a.rating > b.rating) return -1;
					if (a.rating < b.rating) return 1;
					return 0;
				});
			}
		},
		filter(state, action) {
			const arr = JSON.parse(JSON.stringify(data));
			return arr.filter((val) => {
				return val.language === action.payload.value || val.language.includes(action.payload.value);
			});
		},
	},
});

const { actions, reducer } = infoSlice;
export const { sort, filter } = actions;
export default reducer;

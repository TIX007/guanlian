<template>
	<view class="container">
		<u-tabs :list="list1" @click="click">
		</u-tabs>
		<view v-if="current == 0">
			<u-cell-group>
				<!-- <u-action-sheet :actions="list" @select="selectClick" :closeOnClickOverlay="true" :closeOnClickAction="true"  :title="title" :show="show"></u-action-sheet>
				<u-button @click="show = true">打开ActionSheet</u-button> -->
				<u-cell>
					<view slot="title" class="u-slot-title">
						<text class="u-cell-text">单元格</text>
						<u-tag text="审批中" plain size="mini" type="warning">
						</u-tag>
					</view>
				</u-cell>
			</u-cell-group>
			<text class="title">关联方信息</text>
			<u--form labelPosition="top" :model="model1" labelWidth="200px" ref="form1" >
				<u-form-item label="关联方名称：" prop="userInfo.name" borderBottom ref="item1">
					<u--input v-model="model1.userInfo.name" border="none" disabled></u--input>
				</u-form-item>
				<u-form-item label="关联方角色：" prop="userInfo.name" borderBottom ref="item1">
					<u--input v-model="model1.userInfo.name" border="none" disabled></u--input>
				</u-form-item>
				<u-form-item label="证件类型：" prop="userInfo.name" borderBottom ref="item1">
					<u--input v-model="model1.userInfo.name" border="none" disabled></u--input>
				</u-form-item>
				<u-form-item label="证件号码：" prop="userInfo.name" borderBottom ref="item1">
					<u--input v-model="model1.userInfo.name" border="none" disabled></u--input>
				</u-form-item>
				<u-form-item label="境内外标识：" prop="userInfo.name" borderBottom ref="item1">
					<u--input v-model="model1.userInfo.name" border="none" disabled></u--input>
				</u-form-item>
				<u-form-item label="持有比例：" prop="userInfo.name" borderBottom ref="item1">
					<u--input v-model="model1.userInfo.name" border="none" disabled></u--input>
				</u-form-item>
				<u-form-item label="生效日期：" prop="userInfo.name" borderBottom ref="item1">
					<u--input v-model="model1.userInfo.name" border="none" disabled></u--input>
				</u-form-item>
				<u-form-item label="失效日期：" prop="userInfo.name" borderBottom ref="item1">
					<u--input v-model="model1.userInfo.name" border="none" disabled></u--input>
				</u-form-item>
				<u-form-item label="关系说明：" prop="userInfo.name" borderBottom ref="item1">
					<u--textarea v-model="model1.userInfo.name" disabled count></u--textarea>
				</u-form-item>
				
			</u--form>
		</view>
		<view v-if="current == 1">
			<text class="title">审批进度</text>
			<view class="step">
				<u-steps current="2" direction="column">
					<view class="procedure">
						<u-steps-item>
						</u-steps-item>
						<view class="card">
							<view class="card_title">
								<view class="card_title_top">
									<view class="card_title_names">
										<text class="card_title_name">王俊俊</text>
										<text class="card_title_post">总经理</text>
									</view>
									<text class="card_title_time">2022-09-12 13:30</text>
								</view>
								<view class="card_title_bottom">
									<text class="card_title_post">意见：同意申请</text>
									<text class="card_title_condition">已通过</text>
								</view>
							</view>
						</view>
					</view>
					<!-- ------------------------------ -->
					<view class="procedure">
						<u-steps-item>
						</u-steps-item>
						<view class="card">
							<view class="card_title">
								<view class="card_title_top">
									<view class="card_title_names">
										<text class="card_title_name">王俊俊</text>
										<text class="card_title_post">总经理</text>
									</view>
									<text class="card_title_time">2022-09-12 13:30</text>
								</view>
								<view class="card_title_bottom">
									<text class="card_title_post">意见：同意申请</text>
									<text class="card_title_condition">已通过</text>
								</view>
							</view>
						</view>
					</view>
					<view class="procedure">
						<u-steps-item>
						</u-steps-item>
						<view class="card">
							<view class="card_title">
								<view class="card_title_top">
									<view class="card_title_names">
										<text class="card_title_name">王俊俊</text>
										<text class="card_title_post">总经理</text>
									</view>
									<text class="card_title_time">2022-09-12 13:30</text>
								</view>
								<view class="card_title_bottom">
									<text class="card_title_post">意见：同意申请</text>
									<text class="card_title_condition">已通过</text>
								</view>
							</view>
						</view>
					</view>
					<view class="procedure">
						<u-steps-item>
						</u-steps-item>
						<view class="card">
							<view class="card_title">
								<view class="card_title_top">
									<view class="card_title_names">
										<text class="card_title_name">王俊俊</text>
										<text class="card_title_post">总经理</text>
									</view>
									<text class="card_title_time">2022-09-12 13:30</text>
								</view>
								<view class="card_title_bottom">
									<text class="card_title_post">意见：同意申请</text>
									<text class="card_title_condition">已通过</text>
								</view>
							</view>
						</view>
					</view>
					<!-- -------------------- -->
				</u-steps>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				current: 0,
				// show: false,
				// title:'标题',
				// list: [
				// 	{
				// 		name:'选项一'
				// 	},
				// 	{
				// 		name: '选项二'
				// 	}
				// ],
				model1: {
					userInfo: {
						name: 'uView UI',
						sex: '',
					},
				},
				list1: [{
					name: '审批表单',
				}, {
					name: '流程图',
				}]
			}
		},
		onLoad() {},
		methods: {
			click(item) {
				this.current = item.index
				console.log('item', item);
			},
			// selectClick(index){
			// 	console.log(index)
			// }
		}
	}
</script>

<style>
	.container {
		padding: 0 16px;
	}

	.title {
		font-size: 24px;
	}

	.step {
		margin-top: 20px;
	}

	.procedure {
		display: flex;
	}

	.u-steps-item {
		padding-top: 40px;
	}

	.u-slot-title {
		display: flex;
	}

	.card {
		width: 327px;
		height: 82px;
		background: #FFFFFF;
		box-shadow: 0px 0px 6px 0px rgba(221, 221, 221, 0.5);
		border-radius: 4px;
		margin: 10px 0;
	}

	.card_title {
		display: flex;
		flex-direction: column;
		padding: 12px 16px 12px 22px;
	}

	.card_title_top,
	.card_title_bottom {
		display: flex;
		justify-content: space-between;
		margin: 4px 0;
	}

	.card_title_name {
		margin-right: 10px;
		font-size: 18px;
		font-family: PingFang-SC-Bold, PingFang-SC;
		font-weight: bold;
		color: #414141;
		line-height: 25px;
	}

	.card_title_post {
		font-size: 14px;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #959595;
		line-height: 20px;
	}

	.card_title_time {
		font-size: 14px;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #D1D1D1;
		line-height: 20px;
	}

	.card_title_condition {
		font-size: 16px;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #1079E6;
		line-height: 22px;
	}
</style>

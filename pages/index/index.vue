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
						<text class="u-cell-text">张怀义</text>
						<u-tag text="审批中" plain size="mini" type="warning">
						</u-tag>
					</view>
				</u-cell>
			</u-cell-group>
			<view class="form">
				<text class="title">关联方信息</text>
				<u--form labelPosition="top" :model="model1" labelWidth="200px" ref="form1" >
					<u-form-item label="关联方名称：" prop="name" borderBottom ref="item1">
						<u--input v-model="model1.name" border="none" disabled></u--input>
					</u-form-item>
					<u-form-item label="关联方角色：" prop="roleTypeId" borderBottom ref="item1">
						<u--input v-model="model1.roleTypeId" border="none" disabled></u--input>
					</u-form-item>
					<u-form-item label="证件类型：" prop="identityType" borderBottom ref="item1">
						<u--input v-model="model1.identityType" border="none" disabled></u--input>
					</u-form-item>
					<u-form-item label="证件号码：" prop="identityNo" borderBottom ref="item1">
						<u--input v-model="model1.identityNo" border="none" disabled></u--input>
					</u-form-item>
					<u-form-item label="境内外标识：" prop="domesticOrForeign" borderBottom ref="item1">
						<u--input v-model="model1.domesticOrForeign" border="none" disabled></u--input>
					</u-form-item>
					<u-form-item label="持有比例：" prop="holdingPercent" borderBottom ref="item1">
						<u--input v-model="model1.holdingPercent" border="none" disabled></u--input>
					</u-form-item>
					<u-form-item label="生效日期：" prop="activeTime" borderBottom ref="item1">
						<u--input v-model="model1.activeTime" border="none" disabled></u--input>
					</u-form-item>
					<u-form-item label="失效日期：" prop="invalidTime" borderBottom ref="item1">
						<u--input v-model="model1.invalidTime" border="none" disabled></u--input>
					</u-form-item>
					<u-form-item label="关系说明：" prop="relationInfo" borderBottom ref="item1">
						<u--textarea v-model="model1.relationInfo" disabled count></u--textarea>
					</u-form-item>
					
				</u--form>
			</view>
			
			<text class="title2">关联方信息</text>
			<view class="title2_card">
				<view class="title2_card_top">
					<text class="title2_name">流程名：</text>
					<text>新增修改关联关系审批（分行）</text>
				</view>
				<view class="title2_card_bottom">
					<text class="title2_name">流程发起人：</text>
					<text>胡灿灿 </text>
					<u-tag text="审批中" plain size="mini" type="warning">
					</u-tag>
				</view>
			</view>
			<u--form labelPosition="top" :model="model" :rules="rules" labelWidth="200px" ref="form" >
				<u-form-item label="审批建议：" prop="name" borderBottom ref="item">
					<u--textarea v-model="model.name" count></u--textarea>
				</u-form-item>
			</u--form>
			<view class="form_bottom">
				<u-button type="error" shape="circle" text="退回" @click="quit"></u-button>
				<u-button type="primary" shape="circle" text="通过" @click="submit"></u-button>
			</view>
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
				model: {
					name: 'uView UI',
				},
				model1: {
					name: 'uView UI',
					roleTypeId: '',
					identityType: '',
					identityNo: '',
					domesticOrForeign: '',
					holdingPercent: '',
					activeTime: '',
					invalidTime: '',
					relationInfo: '',
				},
				rules: {
					'name': {
						type: 'string',
						required: true,
						message: '请填写审批建议',
						trigger: ['blur', 'change']
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
			submit() {
				this.$refs.form.validate().then(res => {
					uni.$u.toast('校验通过')
				}).catch(errors => {
					uni.$u.toast('校验失败')
				})
			},
			quit(){
				console.log('quit');
			}
			// selectClick(index){
			// 	console.log(index)
			// }
		},
		onReady() {
			//如果需要兼容微信小程序，并且校验规则中含有方法等，只能通过setRules方法设置规则。
			this.$refs.form.setRules(this.rules)
		},
	}
</script>

<style>
	.container {
		padding: 0 16px;
	}

	.title {
		font-size: 24px;
	}
	
	.form {
		margin-bottom: 16px;
	}
	
	.title2 {
		height: 25px;
		font-size: 18px;
		font-family: PingFang-SC-Bold, PingFang-SC;
		font-weight: bold;
		color: #414141;
		line-height: 25px;
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
	
	.u-tag-wrapper {
		margin-left: 5px;
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
	
	.title2_card {
		height: 83px;
		margin-top: 16px;
		background: #FFFFFF;
		box-shadow: 0px 0px 6px 0px rgba(221,221,221,0.5);
		border-radius: 4px;
		padding: 14px 0 14px 17px;
		font-size: 16px;
		display: flex;
		justify-content: space-around;
		flex-direction: column;
	}
	
	.title2_card_bottom {
		display: flex;
	}
	
	.title2_name {
		color: #8F8F8F;
	}
	
	.form_bottom {
		height: 55px;
		margin-top: 22px;
		display: flex;
		background: #FFFFFF;
	}
</style>

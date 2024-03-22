<template>
	<view class="container">
		<view class="left-bottom-sign"></view>
		<view class="back-btn yticon icon-zuojiantou-up" @click="navBack"></view>
		<view class="right-top-sign"></view>
		<!-- 设置白色背景防止软键盘把下部绝对定位元素顶上来盖住输入框等 -->
<!--		<view class="wrapper">-->
<!--			<view class="empty">-->
<!--				<image src="/static/qrcode_for_macrozheng_258.jpg" mode="aspectFit"></image>-->
<!--				<view class="empty-tips">-->
<!--					扫描上方二维码<view class="navigator">关注公众号</view>，-->
<!--				</view>-->
<!--				<view class="empty-tips">-->
<!--					回复<view class="navigator">会员</view>获取体验账号。-->
<!--				</view>-->
<!--			</view>-->
<!--		</view>-->

		<view class="wrapper">
			<view class="left-top-sign">LOGIN</view>
			<view class="welcome">
				用户注册！
			</view>
			<view class="input-content">
				<view class="input-item">
					<text class="tit">用户名</text>
					<input type="text" v-model="username" placeholder="请输入用户名" maxlength="11"/>
				</view>
				<view class="input-item">
					<text class="tit">密码</text>
					<input type="text" v-model="password" placeholder="8-18位不含特殊字符的数字、字母组合" placeholder-class="input-empty" maxlength="20"
								 password  />
				</view>
			</view>
			<button class="confirm-btn" @click="toRegisitry" :disabled="logining">注册</button>
		</view>
		
	</view>
</template>

<script>
	import {memberRegister} from "../../api/member";

	export default {
		data() {
			return {
				logining: false,
				username: '',
				password: '',
			}
		},
		onLoad() {
		},
		methods: {
			navBack() {
				uni.navigateBack();
			},
			async toRegisitry() {
				this.logining = true;
				memberRegister({
					username: this.username,
					password: this.password
				}).then(response => {
					if (response.code === 200) {
						// 注册成功提示
						uni.showToast({
							title: response.message,
							icon: 'success'
						});
						// 注册成功后跳转到登录页
						uni.navigateTo({
							url: '/pages/public/login' // 替换成你的登录页路径
						});
					} else {
						// 注册失败提示
						uni.showToast({
							title: response.message,
							icon: 'none'
						});
						this.logining = false;
					}
				}).catch(() => {
					this.logining = false;
					console.error('注册失败:', error);
					// 注册失败提示
					uni.showToast({
						title: '注册失败，请重试',
						icon: 'none'
					});
				});
			},
		},

	}
</script>

<!--<style lang='scss'>-->
<!--	page {-->
<!--		background: #fff;-->
<!--	}-->
<!--	-->
<!--	.empty {-->
<!--		position: fixed;-->
<!--		left: 0;-->
<!--		top: 0;-->
<!--		width: 100%;-->
<!--		height: 100vh;-->
<!--		padding-bottom: 100upx;-->
<!--		display: flex;-->
<!--		justify-content: center;-->
<!--		flex-direction: column;-->
<!--		align-items: center;-->
<!--		background: #fff;-->
<!--	-->
<!--		image {-->
<!--			width: 420upx;-->
<!--			height: 420upx;-->
<!--			margin-bottom: 30upx;-->
<!--		}-->
<!--		.empty-tips {-->
<!--			display: flex;-->
<!--			font-size: $font-sm+16upx;-->
<!--			color: $font-color-disabled;-->
<!--		-->
<!--			.navigator {-->
<!--				color: $uni-color-primary;-->
<!--				margin-left: 0upx;-->
<!--			}-->
<!--		}-->
<!--	}-->

<!--	.container {-->
<!--		padding-top: 115px;-->
<!--		position: relative;-->
<!--		width: 100vw;-->
<!--		height: 100vh;-->
<!--		overflow: hidden;-->
<!--		background: #fff;-->
<!--	}-->

<!--	.wrapper {-->
<!--		position: relative;-->
<!--		z-index: 90;-->
<!--		background: #fff;-->
<!--		padding-bottom: 40upx;-->
<!--	}-->

<!--	.back-btn {-->
<!--		position: absolute;-->
<!--		left: 40upx;-->
<!--		z-index: 9999;-->
<!--		padding-top: var(&#45;&#45;status-bar-height);-->
<!--		top: 40upx;-->
<!--		font-size: 40upx;-->
<!--		color: $font-color-dark;-->
<!--	}-->

<!--	.left-top-sign {-->
<!--		font-size: 120upx;-->
<!--		color: $page-color-base;-->
<!--		position: relative;-->
<!--		left: -16upx;-->
<!--	}-->

<!--	.right-top-sign {-->
<!--		position: absolute;-->
<!--		top: 80upx;-->
<!--		right: -30upx;-->
<!--		z-index: 95;-->

<!--		&:before,-->
<!--		&:after {-->
<!--			display: block;-->
<!--			content: "";-->
<!--			width: 400upx;-->
<!--			height: 80upx;-->
<!--			background: #b4f3e2;-->
<!--		}-->

<!--		&:before {-->
<!--			transform: rotate(50deg);-->
<!--			border-radius: 0 50px 0 0;-->
<!--		}-->

<!--		&:after {-->
<!--			position: absolute;-->
<!--			right: -198upx;-->
<!--			top: 0;-->
<!--			transform: rotate(-50deg);-->
<!--			border-radius: 50px 0 0 0;-->
<!--			/* background: pink; */-->
<!--		}-->
<!--	}-->

<!--	.left-bottom-sign {-->
<!--		position: absolute;-->
<!--		left: -270upx;-->
<!--		bottom: -320upx;-->
<!--		border: 100upx solid #d0d1fd;-->
<!--		border-radius: 50%;-->
<!--		padding: 180upx;-->
<!--	}-->
<!--</style>-->
<style lang='scss'>
page {
	background: #fff;
}

.container {
	padding-top: 115px;
	position: relative;
	width: 100vw;
	height: 100vh;
	overflow: hidden;
	background: #fff;
}

.wrapper {
	position: relative;
	z-index: 90;
	background: #fff;
	padding-bottom: 40upx;
}

.back-btn {
	position: absolute;
	left: 40upx;
	z-index: 9999;
	padding-top: var(--status-bar-height);
	top: 40upx;
	font-size: 40upx;
	color: $font-color-dark;
}

.left-top-sign {
	font-size: 120upx;
	color: $page-color-base;
	position: relative;
	left: -16upx;
}

.right-top-sign {
	position: absolute;
	top: 80upx;
	right: -30upx;
	z-index: 95;

	&:before,
	&:after {
		display: block;
		content: "";
		width: 400upx;
		height: 80upx;
		background: #b4f3e2;
	}

	&:before {
		transform: rotate(50deg);
		border-radius: 0 50px 0 0;
	}

	&:after {
		position: absolute;
		right: -198upx;
		top: 0;
		transform: rotate(-50deg);
		border-radius: 50px 0 0 0;
		/* background: pink; */
	}
}

.left-bottom-sign {
	position: absolute;
	left: -270upx;
	bottom: -320upx;
	border: 100upx solid #d0d1fd;
	border-radius: 50%;
	padding: 180upx;
}

.welcome {
	position: relative;
	left: 50upx;
	top: -90upx;
	font-size: 46upx;
	color: #555;
	text-shadow: 1px 0px 1px rgba(0, 0, 0, .3);
}

.input-content {
	padding: 0 60upx;
}

.input-item {
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	padding: 0 30upx;
	background: $page-color-light;
	height: 120upx;
	border-radius: 4px;
	margin-bottom: 50upx;

	&:last-child {
		margin-bottom: 0;
	}

	.tit {
		height: 50upx;
		line-height: 56upx;
		font-size: $font-sm+2upx;
		color: $font-color-base;
	}

	input {
		height: 60upx;
		font-size: $font-base + 2upx;
		color: $font-color-dark;
		width: 100%;
	}
}

.confirm-btn {
	width: 630upx;
	height: 76upx;
	line-height: 76upx;
	border-radius: 50px;
	margin-top: 70upx;
	background: $uni-color-primary;
	color: #fff;
	font-size: $font-lg;

	&:after {
		border-radius: 100px;
	}
}

.confirm-btn2 {
	width: 630upx;
	height: 76upx;
	line-height: 76upx;
	border-radius: 50px;
	margin-top: 40upx;
	background: $uni-color-primary;
	color: #fff;
	font-size: $font-lg;

	&:after {
		border-radius: 100px;
	}
}

.forget-section {
	font-size: $font-sm+2upx;
	color: $font-color-spec;
	text-align: center;
	margin-top: 40upx;
}

.register-section {
	position: absolute;
	left: 0;
	bottom: 50upx;
	width: 100%;
	font-size: $font-sm+2upx;
	color: $font-color-base;
	text-align: center;

	text {
		color: $font-color-spec;
		margin-left: 10upx;
	}
}
</style>

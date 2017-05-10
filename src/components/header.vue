<template>
	<header class="s-header">
		<a class="s-h-logo" title="锤子科技官网" href="#">Smartisan</a>
		<div class="s-h-menus">
			<ul>
				<li v-for="(menu, index) in menus" @click="current=index"><router-link :to="menu.url" :class="current === index ? 'current-li':''">{{menu.text}}</router-link></li>
			</ul>
		</div>
		<div class="s-h-user">
			<ul>
				<li>
					<a title="个人中心" class="s-h-user-a"></a>
				</li>
				<li>
					<a title="购物车" class="s-h-cart-a"></a>
				</li>
			</ul>
		</div>
	</header>
</template>
<script>
	export default {
		name: 'header',
		data () {
			return {
				menus:[
				{ text:'在线商城', url:'/index' },
				{ text:'坚果Pro', url:'/hello' },
				{ text:'Smartisan M1/M1L', url:'/index' },
				{ text:'Smartisan OS', url:'/index' },
				{ text:'欢喜云', url:'/index' },
				{ text:'应用下载', url:'/contact' },
				{ text:'官方论坛', url:'/contact' },
				],
				current:0
			}
		},
		attached(){
		}
	}
</script>
<style scoped lang="less">
	.s-header{
		width: 100%;
		height: 100px;
		background: #1a1a1a;
		background-image: linear-gradient(#000,#121212);
		.s-h-logo{
			background: url(//static.smartisanos.cn/index/assets/images/global-logo-red@2x.89b79fc704544cfbaca8766e7cb92dac.png) no-repeat 50%;
			background-size: cover;
			display: block;
			height: 50px;
			width: 50px;
			text-indent: -9999px;
			-webkit-transition: none;
			transition: none;
			text-decoration: none;
			float: left;
			margin: 25px;
		}
		.s-h-menus{
			width: 900px;
			float: left;
			margin: 30px;
			ul{
				li{
					a{
						color: #c8c8c8;
						display: block;
						font-size: 14px;
						padding: 0 25px;
						text-decoration: none;
						font-weight: bold;
						transition:.5s;
					}
					a:hover{
						color: #fff;
					}
				}
			}
		}
		.s-h-user{
			margin-top: 40px;
			width: 180px;
			float: right;
			height: 20px;
			border-left: 1px solid hsla(0,0%,100%,.2);
			ul{
				margin-top: 0px;
				li{
					// text-align: left;
					.s-h-user-a{
						content: " ";
						position: absolute;
						width: 20px;
						height: 20px;
						background: url(//static.smartisanos.cn/index/assets/images/account-icon.32d87deb02b3d1c3cc5bcff0c26314ac.png) -5px 0;
						background-size: 240px 107px;
						-webkit-transition: none;
						transition: none;
						z-index: 9999;
						right: 100px;
						cursor: pointer;
					}
					.s-h-cart-a{
						content: " ";
						width: 30px;
						height: 20px;
						position: absolute;
						background: url(//static.smartisanos.cn/index/assets/images/account-icon.32d87deb02b3d1c3cc5bcff0c26314ac.png) 0 -22px;
						background-size: 240px 107px;
						-webkit-transition: none;
						transition: none;
						z-index: 9999;
						right: 40px;
						cursor: pointer;
					}
				}
			}
		}
	}
	ul{
		li{
			float: left;
			list-style: none;
		}
	}
</style>
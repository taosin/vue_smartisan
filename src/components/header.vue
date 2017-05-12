<template>
	<header class="s-header">
		<div class="s-header-top" v-show="ttio">
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
		</div>
		<div class="s-header-bot" :class="ttio ? '': 's-header-hidden'">
			<div class="s-con">
				<div class="s-left">
					<ul>
						<li v-for="(menu, index) in hMenus" @click="current=index"><router-link :to="menu.url" :class="current === index ? 'current-li':''">{{menu.text}}</router-link></li>
					</ul>
				</div>
				<div class="s-right">
					<ul>
						<li>
							<a title="优先购买码" class="s-right-a">优先购买码</a>
						</li>
						<li>
							<a title="手机回收置换计划" class="s-right-a">手机回收置换计划</a>
						</li>
						<li>
							<a class="s-now-shop">现在购买</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</header>
</template>
<script>
	export default {
		name: 'header',
		data () {
			return {
				menus:[
				{ text:'在线商城', url:'/shop' },
				{ text:'坚果Pro', url:'/hello' },
				{ text:'Smartisan M1/M1L', url:'/index' },
				{ text:'Smartisan OS', url:'/index' },
				{ text:'欢喜云', url:'/index' },
				{ text:'应用下载', url:'/contact' },
				{ text:'官方论坛', url:'/contact' },
				],
				hMenus:[
				{ text:'概览', url:'/index' },
				{ text:'功能', url:'/hello' },
				{ text:'设计', url:'/index' },
				{ text:'实力派', url:'/index' },
				{ text:'操作系统', url:'/index' },
				{ text:'技术规格', url:'/contact' },
				{ text:'图库', url:'/contact' },
				],
				current:0,
				ttio:true,
				tsio:0
			}
		},
		mounted(){
			window.addEventListener('scroll', this.sscroll);
		},
		watch:{
		},
		methods:{
			sscroll(){
				const self = this;
				let tsio = document.body.scrollTop||document.documentElement.scrollTop;
				console.info(tsio);
				if(tsio === 0){
					this.ttio = true;
				}else{
					this.ttio = false;
				}
			}
		}
	}
</script>
<style scoped lang="less">
	.s-header{
		width: 100%;
		background: #1a1a1a;
		background-image: linear-gradient(#000,#121212);
		.s-header-top{
			height: 100px;
			transition:1.5s;
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
				width: 880px;
				float: left;
				margin: 30px;
				margin-left: 100px;
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
				width: 150px;
				float: right;
				height: 20px;
				border-left: 1px solid hsla(0,0%,100%,.2);
				ul{
					margin-top: 0px;
					li{
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
		.s-header-bot{
			display: block;
			position: relative;
			z-index: 21;
			height: 38px;
			transition: transform 1000ms cubic-bezier(0.165, 0.84, 0.44, 1);
			background-color: #1a1a1a;
			.s-con{
				height: 1px;
				border-top: 1px solid hsla(0,0%,100%,.04);
				border-bottom: 1px solid #000;
				height: 37px;
				padding: 0;
				margin: 0;
				.s-left{
					width: 600px;
					height: 38px;
					float: left;
					text-align: left;
					ul{
						padding-left: 20px;
						li{
							a{
								padding: 4px 15px;
								color: #b2b2b2;
								cursor: pointer;
								-webkit-transition: all .15s ease-out;
								transition: all .15s ease-out;
								text-decoration: none;
								margin: 0;
								font-size: 12px;
							}
							a:hover{
								color: #333;
							}
						}
					}
				}
				.s-right{
					float: right;
					margin-right: 30px;
					ul{
						padding-left: 20px;
						li{
							.s-right-a{
								padding: 4px 15px;
								color: #b2b2b2;
								cursor: pointer;
								-webkit-transition: all .15s ease-out;
								transition: all .15s ease-out;
								text-decoration: none;
								margin: 0;
								font-size: 12px;
							}
							.s-right-a:hover{
								color: #333;
							}
							.s-now-shop{
								display: block;
								text-align: center;
								color: #fff;
								border-radius: 4px;
								width: 97px;
								height: 29px;
								line-height: 30px;
								-webkit-transition: none;
								transition: none;
								background: #6f97f0;
								background-image: -webkit-linear-gradient(hsla(0,0%,100%,.1),rgba(0,0,0,.1));
								background-image: linear-gradient(hsla(0,0%,100%,.1),rgba(0,0,0,.1));
								box-shadow: inset 0 0 0 1px rgba(0,0,0,.15), 0 1px 2px rgba(0,0,0,.1);
								margin-top: -7px;
								cursor: pointer;
								transition:.6s;
							}
							.s-now-shop:hover{
								background-color: #658adb;
							}
						}
						li:first-child
						{ 
							border-right: 1px solid hsla(0,0%,100%,.2);
						}
						li:last-child
						{ 
							margin-left: 30px;
						}
					}
				}
			}
		}
		.s-header-hidden{
			position: fixed;
			width: 100%;
			transition:all .6s;
			height: 60px;
			animation:myfirst .5s;
			@keyframes myfirst
			{
				from {height: 0px;}
				to {height: 60px;}
			}
			.s-con{
				height: 1px;
				height: 59px;
				padding: 0;
				margin: 0;
				border: none;
				margin-top: 5px;
				animation:myfirsts .3s;
				@keyframes myfirsts
				{
					from {dispaly: none;}
					to {dispaly: block;}
				}
				transition: display .1s;
				.s-left{
					width: 600px;
					height: 38px;
					float: left;
					text-align: center;
					padding-left: 180px;
					ul{
						padding-left: 20px;
						li{
							a{
								font-size: 14px;
								padding: 4px 15px;
								color: #b2b2b2;
								cursor: pointer;
								-webkit-transition: all .15s ease-out;
								transition: all .15s ease-out;
								text-decoration: none;
								margin: 0;
								transition: marginLeft .5;
							}
							a:hover{
								color: #333;
							}
						}
					}
				}
				.s-right{
					ul{
						li{
							.s-right-a{
								font-size: 14px;
							}
							a{
								font-size: 14px;
							}
							.s-now-shop{
								margin-top: -7px;
								width: 110px;
								height: 39px;
								line-height: 40px;
								transition:.6s;
							}
						}
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
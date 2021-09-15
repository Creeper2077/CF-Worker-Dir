/*  本项目为基于cf-worker-dir(https://github.com/sleepwood/CF-Worker-Dir)的自制Demo，添加了很多常用网站
 */
const config = {
  title: "Creeper导航",                 //write your website title
  subtitle: "基于Cloudflare Workers", //write your website subtitle
  logo_icon: "globe",               //select your logo by semantic-ui icon (you can get more msg in:https://semantic-ui.com/elements/icon.html)
  hitokoto: true,                     //use hitokoto or not
  search:true,                        //enable search function
  search_engine:[                     //choose search engine which you use
    {
      name:"百 度",
      template:"https://www.baidu.com/s?wd=$s"
    },
    {
      name:"Google",
      template:"https://www.google.com/search?q=$s"
    },
    {
      name:"Bing",
      template:"https://www.bing.com/search?q=$s"
    },
    
  ],
  selling_ads: false,                  //Selling your domain or not.(turning on may be helpful for selling this domain by showing some ads.)
  sell_info:{
    domain:"mcgenshin.ga",
    price:999999,                        //domain price
    mon_unit:"yen sign",              //monetary unit 
    contact:[                         //how to contact you
      {
        type:"envelope",               //contact type ("weixin","qq","telegram plane","envelope" or "phone")
        content:"info@example.com"
      }
    ]                        
  },
  lists: [                            //Url list
    {
      name:"视频",
      icon:"video",
      list:[
        {
          url:"https://bilibili.com/",
          name:"B站",
          desc:"哔哩哔哩 (゜-゜)つロ 干杯~"
        },
        {
          url:"https://youtube.com",
          name:"油管",
          desc:"YouTube"
        },
        {
          url:"https://www.acfun.cn/",
          name:"A站",
          desc:"ACFun"
        }
      ]
    },
    {
      name:"二次元",
      icon:"venus mars icon",
      list:[
        {
          url:"https://w3school.com.cn/",
          name:"P站",
          desc:"插画交流网站"
        },
        {
          url:"https://bowlroll.net/",
          name:"B碗",
          desc:"bowlroll"
        },
        {
          url:"https://www.deviantart.com/",
          name:"D站",
          desc:"deviantart"
        },
        {
          url:"https://www.aplaybox.com/",
          name:"模之屋",
          desc:"国内专业MMD社区"
        },
        {
          url:"https://make.girls.moe",
          name:"二次元头像生成器",
          desc:"AI绘画"
        }
      ]
    },
     {
      name:"技术",
      icon:"cogs",
      list:[
        {
          url:"https://github.com",
          name:"Github",
          desc:"程序员集散地"
        },
        {
          url:"https://github.com.cnpmjs.org",
          name:"GitHub镜像网站",
          desc:"访问较快，更稳定"
        },
        {
          url:"https://www.cnblogs.com",
          name:"博客园",
          desc:"开发者的网上家园"
        },
        {
          url:"https://www.csdn.net/",
          name:"CSDN",
          desc:"专业开发者社区"
        }
      ]
    },
    {
      name:"代码",
      icon:"code icon",
      list:[
        {
          url:"https://docs.microsoft.com/",
          name:"Microsoft Docs",
          desc:"微软官方文档"
        },
        {
          url:"https://s.threatbook.cn/",
          name:"微步云沙箱",
          desc:"在线查毒"
        },
        {
          url:"https://www.virustotal.com/gui/home/url",
          name:"VirusTotal",
          desc:"检测可疑文件和 URL"
        },
        {
          url:"https://www.58html.com/html/",
          name:"58HTML",
          desc:"HTML可视化编辑"
        }
      ]
    },
     {
      name:"游戏",
      icon:"gamepad icon",
      list:[
        {
          url:"https://minecraft.fandom.com/zh/wiki/Minecraft_Wiki",
          name:"Minecraft Wiki",
          desc:"最详细的我的世界官方百科"
        },
        {
          url:"https://bbs.mihoyo.com/",
          name:"米游社",
          desc:"技术宅拯救世界"
        },
        {
          url:"https://store.steampowered.com/",
          name:"Steam",
          desc:"全球最大的综合性数字发行平台之一"
        },
        {
          url:"https://www.epicgames.com/",
          name:"Epic Games",
          desc:"游戏平台的后起之秀"
        },
        {
          url:"https://www.mcbbs.net/",
          name:"MCBBS",
          desc:"最大的我的世界中文论坛"
        }
      ]
    },
     {
      name:"工具",
      icon:"pencil alternate",
      list:[
        {
          url:"https://www.aconvert.com/",
          name:"Aconvert",
          desc:"在线格式转换"
        },
        {
          url:"https://www.torrentsafe.com/",
          name:"TorrentSafe",
          desc:"下载转存"
        },
        {
          url:"https://fanyi.baidu.com/",
          name:"百度翻译",
          desc:"在线翻译系统"
        },
        {
          url:"https://markdown.lovejade.cn/?utm_source=jeffjade.com",
          name:"Arya",
          desc:"在线Markdown编辑器"
        },
        {
          url:"https://3g.gljlw.com/music/wy/",
          name:"网易云音乐下载链接提取",
          desc:"提取无损音乐"
        }
      ]
    },
         {
      name:"邮箱",
      icon:"envelope open",
      list:[
        {
          url:"https://126.com",
          name:"126邮箱",
          desc:"网易免费邮箱"
        },
        {
          url:"https://outlook.live.com",
          name:"Outlook",
          desc:"来自微软的邮箱服务"
        },
        {
          url:"https://mail.google.com",
          name:"Gmail",
          desc:"谷歌邮箱"
        }
      ]
    },
     {
      name:"网盘",
      icon:"cloud download",
      list:[
        {
          url:"https://pan.baidu.com",
          name:"百度网盘",
          desc:"带你体验二十年前的速度"
        },
        {
          url:"https://onedrive.live.com",
          name:"Onedrive",
          desc:"基本打不开"
        },
        {
          url:"https://lanzoui.com/",
          name:"蓝奏云",
          desc:"较为良心"
        },
        {
          url:"https://cloud.189.cn",
          name:"天翼云盘",
          desc:"中国电信旗下产品"
        }
      ]
    },
           {
      name:"邮箱",
      icon:"envelope open",
      list:[
        {
          url:"https://126.com",
          name:"126邮箱",
          desc:"网易免费邮箱"
        },
        {
          url:"https://outlook.live.com",
          name:"Outlook",
          desc:"来自微软的邮箱服务"
        },
        {
          url:"https://mail.google.com",
          name:"Gmail",
          desc:"谷歌邮箱"
        }
      ]
    },
     {
      name:"音乐•艺术",
      icon:"music",
      list:[
        {
          url:"https://music.163.com/",
          name:"网易云音乐",
          desc:"享受音乐"
        },
        {
          url:"https://www.grabient.com/",
          name:"Grabient",
          desc:"唯美渐变配色"
        },
        {
          url:"https://www.thingiverse.com/",
          name:"T站",
          desc:"3D模型分享"
        },
        {
          url:"https://github.com/yurui997/pix2pix-keras",
          name:"Pix2Pix-Keras",
          desc:"动漫图片AI上色"
        }
      ]
    },
     {
      name:"放松",
      icon:"smile outline",
      list:[
        {
          url:"https:/www.webhek.com/post/draw-a-stickman.htm",
          name:"画一个小人",
          desc:"有趣的冒险"
        },
        {
          url:"https://www.pixelthoughts.co/",
          name:"60秒冥想",
          desc:"放松身心"
        },
        {
          url:"https://hackertyper.net/",
          name:"HackerTyper",
          desc:"假装黑客"
        },
        {
          url:"https://codepen.io/akm2/full/rHIsa",
          name:"Gravity Points",
          desc:"体验重力的乐趣"
        },
        {
          url:"http://magickeyboard.io/",
          name:"打字游戏",
          desc:"释放你的压力"
        },
        {
          url:"https:/cts.chazhi.net/",
          name:"藏头诗生成器",
          desc:"快速生成藏头诗"
        }
      ]
    }
  ]
}
const el = (tag, attrs, content) => `<${tag} ${attrs.join(" ")}>${content}</${tag}>`;

async function handleRequest(request) {
  const init = {
    headers: {
      'content-type': 'text/html;charset=UTF-8',
    },
  }
  return new Response(renderHTML(renderIndex(),config.selling_ads? renderSeller() :null), init);
}
addEventListener('fetch', event => {
  return event.respondWith(handleRequest(event.request))
})

/*通过分析链接 实时获取favicon
* @url 需要分析的Url地址
*/
function getFavicon(url){
  if(url.match(/https{0,1}:\/\//)){
    //return "https://ui-avatars.com/api/?bold=true&size=36&background=0D8ABC&color=fff&rounded=true&name=" + url.split('//')[1];
    return "https://www.google.cn/s2/favicons?sz=64&domain_url=" + url;
  }else{
    //return "https://ui-avatars.com/api/?bold=true&size=36&background=0D8ABC&color=fff&rounded=true&name=" + url;
    return "https://www.google.cn/s2/favicons?sz=64&domain_url=http://" + url;
  } 
}

/** Render Functions
 *  渲染模块函数
 */

function renderIndex(){
  const footer = el('footer',[],el('div',['class="footer"'],'Powered by' + el('a',['class="ui label"','href="https://github.com/sleepwood/cf-worker-dir"','target="_blank"'],el('i',['class="github icon"'],"") + 'Cf-Worker-Dir') + ' &copy; Base on ' + el('a',['class="ui label"'],el('i',['class="balance scale icon"'],"") + 'MIT License')));
  return renderHeader() + renderMain() + footer;
}

function renderHeader(){
  const item = (template,name) => el('a',['class="item"',`data-url="${template}"`],name);

  var nav = el('div',['class="ui large secondary inverted menu"'],el('div',['class="item"'],el('p',['id="hitokoto"'],'条条大路通罗马')))
  var title = el('h1',['class="ui inverted header"'],el('i',[`class="${config.logo_icon} icon"`],"") + el('div',['class="content"'],config.title + el('div',['class="sub header"'],config.subtitle)));
  var menu = el('div',['id="sengine"','class="ui bottom attached tabular inverted secondary menu"'],el('div',['class="header item"'],'&nbsp;') + config.search_engine.map((link,key) =>{
    if(key == 0){
      return el('a',['class="active item"',`data-url="${link.template}"`],link.name);
    }else{
      return item(link.template,link.name);
    }
  }).join(""))
  var input = el('div',['class="ui left corner labeled right icon fluid large input"'],el('div',['class="ui left corner label"'],el('img',['id="search-fav"','class="left floated avatar ui image"','src="https://www.baidu.com/favicon.ico"'],"")) + el('input',['id="searchinput"','type="search"','placeholder="搜索你想要知道的……"','autocomplete="off"'],"") + el('i',['class="inverted circular search link icon"'],""));
  return el('header',[],el('div',['id="head"','class="ui inverted vertical masthead center aligned segment"'],(config.hitokoto ? el('div',['id="nav"','class="ui container"'],nav) : "") + el('div',['id="title"','class="ui text container"'],title + (config.search ? input + menu :"") + `${config.selling_ads ? '<div><a id="menubtn" class="red ui icon inverted button"><i class="heart icon"></i> 喜欢此域名 </a></div>' : ''}`)))
}

function renderMain() {
  var main = config.lists.map((item) => {
    const card = (url,name,desc)=> el('a',['class="card"',`href=${url}`,'target="_blank"'],el('div',['class="content"'],el('img',['class="left floated avatar ui image"',`src=${getFavicon(url)}`],"") + el('div',['class="header"'],name) + el('div',['class="meta"'],desc)));
    const divider = el('h4',['class="ui horizontal divider header"'],el('i',[`class="${item.icon} icon"`],"")+item.name);

    var content = el('div',['class="ui four stackable cards"'],item.list.map((link) =>{
      return card(link.url,link.name,link.desc);
    }).join(""));

    return el('div',['class="ui basic segment"'],divider + content);
  }).join("");
  
  return el('main',[],el('div',['class="ui container"'],main));
}

function renderSeller() {
  const item = (type,content) => el('div',['class="item"'],el('i',[`class="${type} icon"`],"") + el('div',['class="content"'],content));
  var title = el('h1',['class="ui yellow dividing header"'],el('i',['class="gem outline icon"'],"") + el('div',['class="content"'],config.sell_info.domain + ' 正在出售'));
  var action = el('div',['class="actions"'],el('div',['class="ui basic cancel inverted button"'],el('i',['class="reply icon"'],"") + '返回'));

  var contact = config.sell_info.contact.map((list) => {
    return item(list.type,list.content);
  }).join("");
  var column = el('div',['class="column"'],el('h3',['class="ui center aligned icon inverted header"'],el('i',['class="circular envelope open outline grey inverted icon"'],"") + '联系我') + el('div',['class="ui relaxed celled large list"'],contact));
  var price = el('div',['class="column"'],el('div',['class="ui large yellow statistic"'],el('div',['class="value"'],el('i',[`class="${config.sell_info.mon_unit} icon"`],"") + config.sell_info.price)));
  var content = el('div',['class="content"'],el('div',['class="ui basic segment"'],el('div',['class="ui two column stackable center aligned grid"'],el('div',['class="ui inverted vertical divider"'],'感兴趣？') + el('div',['class="middle aligned row"'],price + column))));

  return el('div',['id="seller"','class="ui basic modal"'],title + content + action);
}

function renderHTML(index,seller) {
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>${config.title} - ${config.subtitle}</title>
      <link href="https://cdn.jsdelivr.net/npm/semantic-ui-css@2.4.1/semantic.min.css" rel="stylesheet">
      <link href="https://cdn.jsdelivr.net/gh/sleepwood/cf-worker-dir@0.1.1/style.css" rel="stylesheet">
      <script src="https://cdn.jsdelivr.net/npm/jquery@3.4.1/dist/jquery.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/semantic-ui-css@2.4.1/semantic.min.js"></script>
  </head>
  <body>
    ${index}
    ${config.selling_ads ? seller : ''}
    <script src="https://v1.hitokoto.cn/?c=a&c=b&c=c&c=j&encode=js&select=%23hitokoto" defer></script>
    <script>
      $('#sengine a').on('click', function (e) {
        $('#sengine a.active').toggleClass('active');
        $(e.target).toggleClass('active');
        $('#search-fav').attr('src',$(e.target).data('url').match(`+/https{0,1}:\/\/\S+\//+`)[0] + '/favicon.ico') ;
      });
      $('.search').on('click', function (e) {
          var url = $('#sengine a.active').data('url');
          url = url.replace(`+/\$s/+`,$('#searchinput').val());
          window.open(url);
      });
      /* 鼠标聚焦时，回车事件 */
      $("#searchinput").bind("keypress", function(){
          if (event.keyCode == 13){
          // 触发需要调用的方法
          $(".search").click();
          }
      });
      $('#menubtn').on('click', function (e) {
          $('#seller').modal('show');
      });
    </script>
  </body>
  </html>`
}

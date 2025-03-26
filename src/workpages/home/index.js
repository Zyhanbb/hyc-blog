import React, { useState } from "react";
import './home.css';
import { Card, Typography, Divider } from "antd";

const { Title, Paragraph, Text, Link } = Typography;

const blockContent = `AntV 是蚂蚁集团全新一代数据可视化解决方案，致力于提供一套简单方便、专业可靠、不限可能的数据可视化最佳实践。得益于丰富的业务场景和用户需求挑战，AntV 经历多年积累与不断打磨，已支撑整个阿里集团内外 20000+ 业务系统，通过了日均千万级 UV 产品的严苛考验。
我们正在基础图表，图分析，图编辑，地理空间可视化，智能可视化等各个可视化的领域耕耘，欢迎同路人一起前行。`;
const Home = () => {

   return (

      <div className="home">
         <h2>个人简介</h2>
         <p>HYC，男</p>

         <h2>教育经历</h2>
         <p>2003.9-2007.6  天天向上幼儿园 </p>
         <p>2007.9-2012.6  民主路小学</p>
         <p>2012.9-2015.6  育才中学（干中学士学位）</p>
         <p>2015.9-2018.6  育才高中（高学士学位）</p>
         <p>2018.9-2022.6  浙大宁波理工学院（理学学士学位）</p>
         <p>2022.9-至今  山东大学（工学硕士学位）</p>


         <h2>工作经历</h2>
         <p>2003.9-2007.6  拉裤子监督员 </p>
         <p>2007.9-2012.6  擦黑板大队长</p>
         <p>2012.9-2015.6  王者荣耀队长</p>
         <p>2015.9-2018.6  王者荣耀大队长</p>
         <p>2018.9-2022.6  不学习委员</p>
         <p>2022.9-至今  保安大队大队长</p>

         <h1>一级标题</h1>
         <p>这是一个段落。</p>
         <p>这是另一个段落。</p>
         <br />
         <b>加粗文本</b>
         <strong>强调（加粗）</strong>
         <i>斜体文本</i>
         <em>强调（斜体）</em>
         <u>下划线</u>
         <s>删除线</s>
         <a href="https://www.example.com" target="_blank">点击访问 Example</a>

         <ul>
            <li>苹果</li>
            <li>香蕉</li>
            <li>橙子</li>
         </ul>
         <h2>二级标题</h2>
         <form action="submit.php" method="post">
            <label for="name">姓名：</label>
            <input type="text" id="name" name="name" />
            <br />
            <label for="email">邮箱：</label>
            <input type="email" id="email" name="email" />
            <br />
            <input type="submit" value="提交" />
         </form>
         <h3>三级标题</h3>
         <h4>四级标题</h4>
         <h5>五级标题</h5>
         <h6>六级标题</h6>


      </div>
   )
}
export default Home;


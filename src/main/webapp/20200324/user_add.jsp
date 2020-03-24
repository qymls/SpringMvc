<%--
  Created by IntelliJ IDEA.
  User: qymls
  Date: 2020/3/10
  Time: 16:35
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%
    String path = request.getContextPath();
    String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort() + path + "/";
%>
<%@ page isELIgnored="false" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<html>
<head>
    <base href="<%=basePath%>">
    <meta charset="UTF-8">
    <title>新增用户信息</title>
    <link rel="stylesheet" href="css/main.css"/>
    <link rel="stylesheet" href="css/content.css"/>
</head>

<body>
<div>

    <div class="clfloat" id="right">
        <div id="nav">
            >新增数据
        </div>
        <form action="User/save" method="post">
            <table border="1" cellspacing="0" width="100%">
                <tr>
                    <th>用户名</th>
                    <th><input type="text" name="username"></th>
                </tr>
                <tr>
                    <th>密码</th>
                    <th><input type="text" name="password"></th>
                </tr>
                <tr>
                    <th>昵称</th>
                    <th><input type="text" name="nickname"></th>
                </tr>
                <tr>
                    <th>添加信息</th>
                    <th>
                        <span class="info">添加失败</span>
                    </th>
                </tr>
                <tr>
                    <th colspan="2">
                        <input type="submit" value="新增数据">
                    </th>
                </tr>
            </table>
        </form>
    </div>
</div>
</body>

</html>

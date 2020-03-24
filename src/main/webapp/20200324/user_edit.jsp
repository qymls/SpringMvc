<%--
  Created by IntelliJ IDEA.
  User: qymls
  Date: 2020/3/10
  Time: 17:07
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%
    String path = request.getContextPath();
    String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort() + path + "/";
%>
<%@ page isELIgnored="false" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<!DOCTYPE html >
<html>
<head>
    <base href="<%=basePath%>">
    <meta charset="UTF-8">
    <title>修改用户信息</title>
    <link rel="stylesheet" href="css/main.css"/>
    <link rel="stylesheet" href="css/content.css"/>
</head>

<body>

<div class="clfloat" id="right">
    <div id="nav">
        修改数据
    </div>
    <form action="User/update">
        <table border="1" cellspacing="0" width="100%">
            <input type="hidden" value="${user.id}" name="id">
            <tr>
                <th>用户名</th>
                <th><input type="text" name="username" value="${user.username}"></th>
            </tr>
            <tr>
                <th>密码</th>
                <th><input type="text" name="password" value="${user.password}"></th>

            </tr>
            <tr>
                <th>昵称</th>
                <th><input type="text" name="nickname" value="${user.nickname}"></th>
            </tr>
            <tr>
                <th colspan="2">
                    <input type="submit" value="修改数据">
                </th>
            </tr>
        </table>
    </form>
</div>
</div>
</body>

</html>

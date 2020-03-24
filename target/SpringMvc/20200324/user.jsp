<%--
  Created by IntelliJ IDEA.
  User: qymls
  Date: 2020/3/10
  Time: 15:18
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
    <title>用户管理</title>
    <link rel="stylesheet" href="css/main.css"/>
</head>

<body>
<div>
    <table border="1" width="100%" cellspacing="0">
        <tr>
            <th>编号</th>
            <th>用户名</th>
            <th>密码</th>
            <th>昵称</th>
            <th>操作 &emsp;|&emsp; <a href="20200324/user_add.jsp">新增</a></th>
        </tr>
        <c:forEach items="${users}" var="user">
            <tr>
                <td>${user.id}</td>
                <td>${user.username}</td>
                <td>${user.password}</td>
                <td>${user.nickname}</td>
                <td>
                    <a href="User/findOne?id=${user.id}"> 编辑 </a>&emsp;|&emsp;
                    <a href="User/delete/${user.id}">删除</a>
                </td>
            </tr>
        </c:forEach>
    </table>
</div>
</div>
</body>
</html>

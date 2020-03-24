package _20200324.dao.impl;

import _20200324.dao.IUserDao;
import _20200324.domain.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository/*将该类交给Spring来管理*/
public class UserDaoImpl implements IUserDao {
    @Autowired
    private JdbcTemplate jdbcTemplate;

    @Override
    public void save(User user) {
        jdbcTemplate.update("insert into user(username, password, nickname) value (?,?,?)",
                user.getUsername(), user.getPassword(), user.getNickname());
    }

    @Override
    public void update(User user) {
        jdbcTemplate.update("update user set username =? , password=? , nickname = ? where id=?",
                user.getUsername(), user.getPassword(), user.getNickname(), user.getId());
    }

    @Override
    public void delete(Long id) {
        int update = jdbcTemplate.update("delete from user where id = ?", id);
        System.out.println(update);
    }

    @Override
    public User findOne(long id) {
        User user = jdbcTemplate.queryForObject("select * from user where id = ?", new BeanPropertyRowMapper<User>(User.class), id);
        return user;
    }

    @Override
    public List<User> findAll() {
        List<User> userList = jdbcTemplate.query("select * from user", new BeanPropertyRowMapper<User>(User.class));
        return userList;
    }

}

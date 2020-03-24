package _20200324.dao;


import _20200324.domain.User;

import java.util.List;

public interface IUserDao {
    void save(User user);

    void update(User user);

    void delete(Long id);

    User findOne(long id);

    List<User> findAll();

}

package _20200324.service;


import _20200324.domain.User;

import java.util.List;

public interface IUserService {
    List<User> findAll();

    void delete(long id);

    void save(User user);

    User findOne(long id);

    void update(User user);

}

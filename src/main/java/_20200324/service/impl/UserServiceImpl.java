package _20200324.service.impl;

import _20200324.dao.IUserDao;
import _20200324.domain.User;
import _20200324.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements IUserService {

    private IUserDao userDao;

    @Autowired
    public void setUserDao(IUserDao userDao) {
        this.userDao = userDao;
    }


    @Override
    public List<User> findAll() {
        userDao.findAll();
        return userDao.findAll();
    }

    @Override
    public void delete(long id) {
        userDao.delete(id);
    }

    @Override
    public void save(User user) {
        userDao.save(user);
    }

    @Override
    public User findOne(long id) {
        return userDao.findOne(id);
    }

    @Override
    public void update(User user) {
        userDao.update(user);
    }

}

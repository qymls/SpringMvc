package _20200324;

import _20200324.dao.IUserDao;
import _20200324.domain.User;
import _20200324.service.IUserService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import java.sql.SQLException;
import java.util.List;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration("classpath:applicationContext.xml")
public class MainTest {

    @Autowired
    private IUserDao userDao;

    @Autowired
    private IUserService userService;



    @Test
    public void test() throws SQLException {
     /*   User user = new User("xxx", "sdsds3", "dsdsds");
        user.setId(5l);
        userDao.update(user);*/
        /* userDao.delete(5l);*/
        User one = userService.findOne(3l);
        System.out.println(one);

        List<User> all = userService.findAll();
        System.out.println(all);


    }


}

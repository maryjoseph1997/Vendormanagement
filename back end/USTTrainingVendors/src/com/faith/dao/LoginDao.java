package com.faith.dao;

import org.springframework.jdbc.core.JdbcTemplate;

public class LoginDao implements ILoginDao {
	
	// setting jdbc connection
	JdbcTemplate template;

	public void setTemplate(JdbcTemplate template) {
		this.template = template;
	}

	//verification of username and password for login
	/* (non-Javadoc)
	 * @see com.faith.dao.ILoginDao#verifyUser(java.lang.String, java.lang.String)
	 */
	@Override
	public boolean verifyUser (String username, String password) {
		boolean bol;
		String sql = "select staffName from f_loginTable where username=? and password=? ";
	int noOfRow =template.update(sql, new Object[] {username,password});
			if(noOfRow==1){
				bol=true;
			}
			else{
				bol=false;
			}
	return bol;
	}
}

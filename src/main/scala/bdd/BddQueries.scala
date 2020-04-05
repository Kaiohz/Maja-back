package bdd

object BddQueries {

  val authQuery = "SELECT password FROM" +
                      " user " +
                      "WHERE username = ?"

  val subQuery = "INSERT INTO " +
    "user (username,password)" +
    "VALUES (?, ?)"

  val updatePassword = "UPDATE user " +
    "SET password = ? " +
    "WHERE username = ?"

  val updateLogin = "UPDATE user " +
    "SET username = ? " +
    "WHERE username = ?"

  val delUser = "DELETE " +
    "FROM user " +
    "WHERE username = ?"

}

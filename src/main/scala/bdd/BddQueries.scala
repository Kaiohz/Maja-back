package bdd

object BddQueries {

  val authQuery = "SELECT password FROM" +
                      " user " +
                      "WHERE username = ?"

  val subQuery = "INSERT INTO " +
    "user (username,password)" +
    "VALUES (?, ?)"

}

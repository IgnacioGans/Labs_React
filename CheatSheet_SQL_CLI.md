## Execute MariaDB/MySQL
    PS C:\xampp\mysql\bin> .\mysql.exe -u root -p

## SQL CLI

#  show databases;

    MariaDB [(none)]> show databases;
    +----------------------------+
    | Database                   |
    +----------------------------+
    | db_inventory               |
    | erikaweb                   |
    | information_schema         |
    | inventory_bread            |
    | mysql                      |
    | performance_schema         |
    | phpmyadmin                 |
    | remkingscriptcase          |
    | rkreactnodejsmariadb       |
    | scriptcase2                |
    | spotfollow                 |
    | test                       |
    | woocommerce_practice       |
    | wp-perou-cuzco-trek        |
    | wp-perou-cuzco-trek-backup |
    | wp-remking                 |
    +----------------------------+
    16 rows in set (0.028 sec)

# check current database selected

    MariaDB [(none)]> select database();
    +------------+
    | database() |
    +------------+
    | NULL       |
    +------------+

    1 row in set (0.006 sec)

#  use rkreactnodejsmariadb  (Select Database)
    mysql> use myDB;
    Note when is selected the database: 
    MariaDB [none]>  ---> MariaDB [rkreactnodejsmariadb]>

#  show tables;

    MariaDB [rkreactnodejsmariadb]> show tables;
    +--------------------------------+
    | Tables_in_rkreactnodejsmariadb |
    +--------------------------------+
    | students                       |
    +--------------------------------+
    1 row in set (0.004 sec)

# Show Data From That Table

    MariaDB [rkreactnodejsmariadb]> select * from  students; 
    +------+------+------+-------+
    | id   | name | age  | grade |
    +------+------+------+-------+
    |    1 | John |    6 |     1 |
    +------+------+------+-------+
    1 row in set (0.016 sec)

# ADD Primary Keys

    ALTER TABLE students ADD CONSTRAINT id_unique UNIQUE (id);

# Show Keys

    SHOW KEYS FROM students;
    SHOW INDEXES FROM students;

# Remove Constraint

    In MySQL, there’s no DROP CONSTRAINT, you have to use DROP FOREIGN KEY instead:

    ALTER TABLE `table_name` DROP FOREIGN KEY `id_name_fk`;

    You might have to drop the index too because simply removing foreign key doesn’t remove the index.

    ALTER TABLE `table_name` DROP INDEX  `id_name_fk`;

# Create Table
    mysql> create table students (id int, name varchar(255), age int, grade int);

    mysql> CREATE TABLE animals (
            id INT NOT NULL AUTO_INCREMENT,
            name CHAR(30) NOT NULL,
            PRIMARY KEY (id)
        );

# Insert Value Data
    mysql> insert into students values(1, 'John', 6, 1);

# Remove Table

    mysql> DROP TABLE students;

# Remove or Deleting value inside table
    mysql> DELETE FROM students WHERE tutorial_id=1;    
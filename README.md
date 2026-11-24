#### Backfilctl  dev tool


# Description 

 this is a dev tool to gracefully run the database operation like update without hearting production database by tracking the operation,slow/speed up depending on the operation load in database and giving report for case of operation interruption
  and most important , it wisely know  when and how to resume on retry and restart.


  ### tech stack

  1.NodeJs: as runtime
  2. Express : background framework

  ###  techincal terms for this tool

  # operation
   is the specific change the user wants the tool to perform on existing database rows.

   consists of :

   1. # target: 
   eg: users table. 
   2. # Condition:
      only where the  rows the  change(full_name) is missing

    3. # Change
         what the user want to be added.eg:calculate full_name from first_name and last_name.

    4. # Processing Policy
      handle a limited number of rows per batch.



      ### Job spec file description

## 1. name

A human-readable name for this job.

Example: users-full-name



## 2.table

The PostgreSQL table that contains the rows.

Example: public.users



## 3. key

The unique, ordered key used to move through rows in batches.

Example: id



## 4. set

The SQL assignment describing how matching rows should change.

Example: full_name = first_name || ' ' || last_name



## 5. where

The condition that identifies rows still needing work.

Example: full_name IS NULL



## 6. batch.size

The maximum number of rows selected for one batch.

Example: 1000



## 7. batch.delayMs

The fixed waiting period between batches in milliseconds.

Example: 50


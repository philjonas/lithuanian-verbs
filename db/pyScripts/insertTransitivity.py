import sqlite3
from transitive import transVerbs

conn = sqlite3.connect('../ltVerbs.db')
c = conn.cursor()

c.executemany('INSERT INTO transitivity VALUES(?,?,?)', transVerbs)

conn.commit()

for row in c.execute('SELECT * FROM transitivity'):
    print(row)

conn.close()
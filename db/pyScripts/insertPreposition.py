import sqlite3

conn = sqlite3.connect('../ltVerbs.db')
c = conn.cursor()

prepositions = [ (1,'ant', 'on'),
                 (2,'apie', 'about'),
                 (3,'aplink', 'around'),
                 (4,'dėl', 'because of'),
                 (5,'į', 'to'),
                 (6,'iš', 'from'),
                 (7,'nuo', 'from'),
                 (8,'pas', 'at (someone\'s place, home )'),
                 (9,'paskui', 'after'),
                 (10,'po', 'after'),
                 (11,'prie', 'near'),
                 (12,'prieš', 'before'),
                 (13,'pro', 'through'),
                 (14,'su', 'with'),
                 (15,'už', 'for'),
                 (-1,'no preposition','')
                ]

c.executemany('INSERT INTO preposition VALUES(?,?,?)', prepositions)

conn.commit()

for row in c.execute('SELECT * FROM preposition'):
    print(row)

conn.close()

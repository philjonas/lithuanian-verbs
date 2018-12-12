import sqlite3

conn = sqlite3.connect('../ltVerbs.db')
c = conn.cursor()

declensions = [ (1,'nominative', 'kas'),
                (2,'genitive', 'ko'),
                (3,'accusative', 'ką'),
                (4,'dative', 'kam'),
                (5,'instrumental', 'kuo'),
                (6,'locative', 'kur'),
                (7,'vocative', ''),
                (-1,'no case', '')]

c.executemany('INSERT INTO declension VALUES(?,?,?)', declensions)

conn.commit()

for row in c.execute('SELECT * FROM declension'):
    print(row)

conn.close()

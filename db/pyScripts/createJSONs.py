import sqlite3
import json
import codecs

conn = sqlite3.connect('../ltVerbs.db')
c = conn.cursor()

declensions = []
for row in c.execute('SELECT * FROM [count declensions]'):
    obj = {}
    obj['case'], obj['count'] = row
    declensions.append(obj)

prepositions_by_case = []
for row in c.execute('SELECT * FROM [count preposition by case]'):
    obj = {}
    obj['case'], obj['preposition'], obj['count'] = row
    prepositions_by_case.append(obj)

readable_list = []
for row in c.execute('SELECT * FROM [readable list]'):
    obj = {}
    obj['verbId'], obj['verb'], obj['case'], obj['preposition'] = row
    readable_list.append(obj)

def jsonDump(data, filename):
    with open(filename, 'w', encoding='utf8') as outfile:
        json.dump(data, outfile, indent=4, ensure_ascii=False)

jsonDump(declensions, 'declensions.json')
jsonDump(prepositions_by_case, 'prepositions_by_case.json')
jsonDump(readable_list, 'readable_list.json')

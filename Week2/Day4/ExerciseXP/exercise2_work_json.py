import json

sampleJson = """{ 
   "company":{ 
      "employee":{ 
         "name":"emma",
         "payable":{ 
            "salary":7000,
            "bonus":800
         }
      }
   }
}"""

record = json.loads(sampleJson)
record

print(record['company']['employee']["payable"]["salary"])
record['company']['employee']['birth-date'] = '1970/1/1'

with open('.\Week2\Day4\ExerciseXP\dumped.json', 'w') as f:
    json.dump(record, f)
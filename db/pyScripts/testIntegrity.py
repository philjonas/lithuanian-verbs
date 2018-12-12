from transitive import transVerbs

index = 0
previousIndex = 0

for vId,x,y in transVerbs:
    index = vId
    print(index, index - previousIndex)
    previousIndex = index
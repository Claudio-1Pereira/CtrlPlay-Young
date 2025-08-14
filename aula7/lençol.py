def dobraLencol(lencol,gaveta):
    if(lencol<gaveta):
        return 0 
    else:
        return 1 + dobraLencol(lencol/2,gaveta)

print(dobraLencol(200,25))
class A:
    a = 1
    __b = 2 

class B(A):
    __c = 3

    def __init__(self):
        print(self.a)
        print(self.__c)

a = A()
print(a.a)

b = B()
print(b.__b)
print(b.__c)
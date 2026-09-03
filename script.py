def is_prime(no):
    for i in range(2,no//2):
        if no%i==0:
            return False
    else:
        return True
no = int(input("enter a number"))
if is_prime(no):
    print("yes the given number is prime number")

else:
    print("not a prime number")
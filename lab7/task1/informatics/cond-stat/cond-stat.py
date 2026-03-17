#a
a = int(input())
b = int(input())

if a > b:
    print(a)
else:
    print(b)

#b
year = int(input())

if (year % 400 == 0) or (year % 4 == 0 and year % 100 != 0):
    print("YES")
else:
    print("NO")

#c
correct_ans = int(input())
student_ans = int(input())

if (correct_ans == 1 and student_ans == 1) or (correct_ans != 1 and student_ans != 1):
    print("YES")
else:
    print("NO")

#d
x = int(input())

if x > 0:
    print(1)
elif x < 0:
    print(-1)
else:
    print(0)

#e
a1 = int(input())
b1 = int(input())

if a1 > b1:
    print(1)
elif b1 > a1:
    print(2)
else:
    print(0)
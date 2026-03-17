#1
def make_bricks(small, big, goal):
    if goal > big * 5 + small:
        return False
    if goal % 5 > small:
        return False
    return True 

#2
def lone_sum(a, b, c):
    sum = 0
    if a != b and a != c: sum += a
    if b != a and b != c: sum += b
    if c != a and c != b: sum += c
    return sum

#3
def lucky_sum(a, b, c):
    if a == 13: return 0
    if b == 13: return a
    if c == 13: return a + b
    return a + b + c

#4
def no_teen_sum(a, b, c):
    def fix_teen(n):
        if 13 <= n <= 19 and n != 15 and n != 16:
            return 0
        return n
    return fix_teen(a) + fix_teen(b) + fix_teen(c)

#5
def round_sum(a, b, c):
    def round10(num):
        if num % 10 >= 5:
            return num + (10 - num % 10)
        return num - (10 if num % 10 == 10 else num % 10)
    
    return round10(a) + round10(b) + round10(c)

#6
def close_far(a, b, c):
    cond1 = abs(a - b) <= 1 and abs(a - c) >= 2 and abs(b - c) >= 2
    cond2 = abs(a - c) <= 1 and abs(a - b) >= 2 and abs(c - b) >= 2
    return cond1 or cond2

#7
def make_chocolate(small, big, goal):
    max_big = goal // 5
    if big >= max_big:
        rem = goal - (max_big * 5)
    else:
        rem = goal - (big * 5)
        
    if rem <= small:
        return rem
    return -1

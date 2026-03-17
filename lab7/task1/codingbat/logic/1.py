#1
def cigar_party(cigars, is_weekend):
    if is_weekend:
        return cigars >= 40
    else:
        return cigars >= 40 and cigars <= 60

#2
def date_fashion(you, date):
    if you <= 2 or date <= 2:
        return 0
    elif you >= 8 or date >= 8:
        return 2
    else:
        return 1  

#3
def squirrel_play(temp, is_summer):
    upper = 100 if is_summer else 90
    return 60 <= temp <= upper  

#4
def caught_speeding(speed, is_birthday):
    extra = 5 if is_birthday else 0
    if speed <= 60 + extra:
        return 0
    if speed <= 80 + extra:
        return 1
    return 2

#5
def sorta_sum(a, b):
    s = a + b
    if 10 <= s <= 19:
        return 20
    return s

#6
def alarm_clock(day, vacation):
    is_weekend = day == 0 or day == 6
    if vacation:
        return "off" if is_weekend else "10:00"
    return "10:00" if is_weekend else "7:00"

#7
def love6(a, b):
    return a == 6 or b == 6 or a + b == 6 or abs(a - b) == 6

#8
def in1to10(n, outside_mode):
    if outside_mode:
        return n <= 1 or n >= 10
    return 1 <= n <= 10

#9
def near_ten(n):
    within = n % 10
    return within <= 2 or within >= 8
#1
def double_char(str):
    result = ""
    for char in str:
        result += char * 2
    return result

#2
def count_hi(str):
    return str.count('hi')

#3
def cat_dog(str):
    return str.count('cat') == str.count('dog')

#4
def count_code(str):
    count = 0
    for i in range(len(str) - 3):
        if str[i] == 'c' and str[i+1] == 'o' and str[i+3] == 'e':
            count += 1
    return count

#5
def end_other(a, b):
    a_low = a.lower()
    b_low = b.lower()
    return a_low.endswith(b_low) or b_low.endswith(a_low)

#6
def xyz_there(str):
    for i in range(len(str) - 2):
        if str[i:i+3] == 'xyz':
            if i == 0 or str[i-1] != '.':
                return True
    return False

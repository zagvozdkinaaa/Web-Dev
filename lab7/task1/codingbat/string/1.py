#1
def hello_name(name):
    return "Hello " + name + "!"

#2
def make_abba(a, b):
    return a + b + b + a

#3
def make_tags(tag, word):
    return "<" + tag + ">" + word + "</" + tag + ">"

#4
def make_out_word(out, word):
    return out[:2] + word + out[2:]

#5
def extra_end(str):
    last_two = str[-2:]
    return last_two * 3 

#6
def first_two(str):
    return str[:2]

#7
def first_half(str):
    mid_index = len(str) // 2
    return str[:mid_index]

#8
def without_end(str):
    return str[1:-1]

#9
def combo_string(a, b):
    if len(a) < len(b):
        return a + b + a
    else:
        return b + a + b

#10
def non_start(a, b):
    return a[1:] + b[1:]

#11
def left2(str):
    rest = str[2:]
    first_two = str[:2]
    return rest + first_two

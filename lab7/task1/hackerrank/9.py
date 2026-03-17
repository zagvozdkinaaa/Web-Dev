#Detect Floating Point Number
import re

if __name__ == '__main__':
    t = int(input())
    for _ in range(t):
        s = input()
        print(bool(re.match(r'^[+-]?[0-9]*\.[0-9]+$', s)))
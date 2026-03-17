#DefaultDict Tutorial
from collections import defaultdict

if __name__ == '__main__':

    n, m = map(int, input().split())
    
    d = defaultdict(list)
    
    for i in range(1, n + 1):
        word = input()
        d[word].append(str(i))
        
    for _ in range(m):
        word_b = input()
        if word_b in d:
            print(" ".join(d[word_b]))
        else:
            print("-1")
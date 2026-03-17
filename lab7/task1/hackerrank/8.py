#Input()
if __name__ == '__main__':
    x, k = map(int, input().split())

    polynomial = input()
    
    if eval(polynomial) == k:
        print(True)
    else:
        print(False)
# https://www.hackerrank.com/challenges/pacman-dfs


# 33
# 3 9
# 3 10
# 3 11
# 3 12
# 3 13
# 3 14
# 3 15
# 3 16
# 2 16
# 1 16
# 1 17
# 1 18
# 2 18
# 3 18
# 4 18
# 5 18
# 5 17
# 5 16
# 5 15
# 5 14
# 5 13
# 5 12
# 5 11
# 5 10
# 5 9
# 5 8
# 5 7
# 5 6
# 5 5
# 5 4
# 5 3
# 5 2
# 5 1
# 32
# 3 9
# 3 10
# 3 11
# 3 12
# 3 13
# 3 14
# 3 15
# 3 16
# 2 16
# 1 16
# 1 17
# 1 18
# 2 18
# 3 18
# 4 18
# 5 18
# 5 17
# 5 16
# 5 15
# 5 14
# 5 13
# 5 12
# 5 11
# 5 10
# 5 9
# 5 8
# 5 7
# 5 6
# 5 5
# 5 4
# 5 3
# 5 2
# 5 1


def pacman(grid, x, y):
    solution = []

    def helper(y, x, stack):
        if grid[y][x] == '%' or (y, x) in stack: 
            del stack[:]
        elif grid[y][x] == '.':
            stack.append((y, x))
            solution.append(stack)
        else:
            stack.append((y, x))
            helper(y - 1, x, stack.copy())
            helper(y + 1, x, stack.copy())
            helper(y, x - 1, stack.copy())
            helper(y, x + 1, stack.copy())
            del stack[:]

    helper(y, x, [])
    print(len(solution))

    if len(solution) == 0:
        return -1
    best = solution[0]
    best_length = len(best)

    for stack in solution:
        if len(stack) < best_length:
            best = stack
            best_length = len(stack)
    return best

def parse_input(in1, in2, in3, in4):
    py, px = map(int, in1.split(" "))
    fy, fx = map(int, in2.split(" "))
    bh, bw = map(int, in3.split(" "))
    grid = in4.split("\n")
    return py, px, fy, fx, bh, bw, grid

if __name__ == '__main__':
    in1 = "3 9"
    in2 = "5 1"
    in3 = "7 20"
    in4 = """%%%%%%%%%%%%%%%%%%%%
%--------------%---%  
%-%%-%%-%%-%%-%%-%-%  
%--------P-------%-%  
%%%%%%%%%%%%%%%%%%-%  
%.-----------------%  
%%%%%%%%%%%%%%%%%%%%"""
    
    y, x, fy, fx, bh, bw, grid = parse_input(in1, in2, in3, in4)
    ans = pacman(grid, x, y)
    print(f"""
    Length: {len(ans)}
    Path:   {ans}
    """)
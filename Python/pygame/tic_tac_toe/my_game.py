import pygame
pygame.init()

size = (600, 400)
screen = pygame.display.set_mode(size)
pygame.display.set_caption("Моя программа")
img = pygame.image.load("cat.png")
pygame.display.set_icon(img)

font = pygame.font.SysFont('comicsansms', 32)
RED = (255,0,0)
GREEN = (0,255,0)
BLUE = (0,0,255)
BLACK = (0,0,0)
follow = font.render("Ирочка", True, RED, GREEN)
like = font.render("Смотри что умею", True, GREEN, BLUE)
width, height = like.get_size()
width1, height1 = follow.get_size()
x,y = 0, 300
x1, y1 = 0, 0
direct_x = 1
direct_y = 1
direct_x1 = 1
direct_y1 = 1
FPS = 120
clock = pygame.time.Clock() #задаем кадры в секунду
while True:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            quit()
    clock.tick(FPS) # Скорость движения
    screen.fill(BLACK) # закраска черным
    screen.blit(follow, (x1, y1))
    screen.blit(like, (x,y))
    x += direct_x
    if x + width >= 600 or x<0:
        direct_x = -direct_x
    y += direct_y
    if y + height >= 400 or y<0:
        direct_y = -direct_y

    x1 += direct_x1
    if x1 + width1 >= 600 or x1<0:
        direct_x1 = -direct_x1
    y1 += direct_y1
    if y1 + height1 >= 400 or y1<0:
        direct_y1 = -direct_y1

    pygame.display.update()

import numpy as np
import matplotlib.pyplot as plot
from pylab import figure,polar,show
from numpy import arange,pi,cos
#Seta a projeção dos eixos.
plot.axes(projection='polar')

#Titulo do radar.
#plot.title('Radar r=R')

# Plota o circulo de 2 radianos usando a formula polar.
rads = arange(0, (2 * pi), (pi/4)) #projeta as laterais.


for radian in rads:
    plot.polar(radian, (np.pi ), 'o')
    line()


# Printa o gráfico
plot.show()

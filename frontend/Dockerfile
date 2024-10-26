# 使用 Nginx 作为基础镜像
FROM nginx:1.20.2
# 添加 Nginx 配置文件
COPY nginx.conf /etc/nginx/conf.d/default.conf
#添加启动脚本
COPY docker-entrypoint.sh /docker-entrypoint.sh
RUN chmod +x /docker-entrypoint.sh
COPY dist /usr/share/nginx/html
ENTRYPOINT ["./docker-entrypoint.sh"]
#ADD oauth2 /usr/share/nginx/html/oauth2

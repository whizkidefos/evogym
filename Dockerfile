# Use the custom base image created in the previous step
FROM evogym-base

# Expose the port on which your app runs
EXPOSE 80

# Set the environment variable for HTTPS
ENV HTTPS=true

# Set the command to start the app
CMD [ "npm", "start" ]

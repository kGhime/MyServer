import arcpy
import os

# Set output file names
outdir = r"C:\Users\kavi9400\Documents\ArcGIS\Projects\MyProject4\Output"
service = "BUG_000123351"
sddraft_filename = service + ".sddraft"
sddraft_output_filename = os.path.join(outdir, sddraft_filename)

# Reference map to publish
aprx = arcpy.mp.ArcGISProject(r"C:\Users\kavi9400\Documents\ArcGIS\Projects\MyProject4\MyProject4.aprx")
m = aprx.listMaps("Map")[0]

# Create MapServiceDraft and set service properties
service_draft = arcpy.sharing.CreateSharingDraft("STANDALONE_SERVER", "MAP_SERVICE", service, m)
service_draft.targetServer = r"C:\Users\kavi9400\Documents\ArcGIS\Projects\MyProject4\arcgis on kghime.esri.com_6080.ags"

# Create Service Definition Draft file
service_draft.exportToSDDraft(sddraft_output_filename)

# Stage Service
sd_filename = service + ".sd"
sd_output_filename = os.path.join(outdir, sd_filename)
arcpy.StageService_server(sddraft_output_filename, sd_output_filename)

# Share to portal
print("Uploading Service Definition...")
arcpy.UploadServiceDefinition_server(sd_output_filename, r"C:\Users\kavi9400\Documents\ArcGIS\Projects\MyProject4\arcgis on kghime.esri.com_6080.ags")

print("Successfully Uploaded service.")